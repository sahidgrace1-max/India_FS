#!/bin/bash
# ============================================================
#  Grace International - Hostinger VPS Deployment Script
#  Run this script on your VPS after cloning the repository.
#  Usage: chmod +x deploy.sh && sudo ./deploy.sh
# ============================================================

set -e

# ---------- COLORS ----------
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

log()  { echo -e "${GREEN}[✓]${NC} $1"; }
warn() { echo -e "${YELLOW}[!]${NC} $1"; }
err()  { echo -e "${RED}[✗]${NC} $1"; }
info() { echo -e "${CYAN}[i]${NC} $1"; }

# ---------- PRE-CHECKS ----------
if [ "$EUID" -ne 0 ]; then
  err "Please run this script as root:  sudo ./deploy.sh"
  exit 1
fi

# ---------- VARIABLES ----------
read -p "Enter your domain name (e.g. graceinternational.com): " DOMAIN
read -p "Enter your email for SSL certificate: " SSL_EMAIL
APP_DIR="/var/www/grace-international"
BACKEND_DIR="$APP_DIR/grace-backend"
FRONTEND_DIST="$APP_DIR/dist"

echo ""
info "Domain:  $DOMAIN"
info "App Dir: $APP_DIR"
echo ""

# ============================================================
#  STEP 1: System Updates & Essential Packages
# ============================================================
log "Updating system packages..."
apt update && apt upgrade -y

log "Installing essential packages..."
apt install -y curl git build-essential nginx certbot python3-certbot-nginx ufw

# ============================================================
#  STEP 2: Install Node.js 20 LTS
# ============================================================
if ! command -v node &> /dev/null; then
  log "Installing Node.js 20 LTS..."
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt install -y nodejs
else
  info "Node.js already installed: $(node -v)"
fi

# ============================================================
#  STEP 3: Install PM2 globally
# ============================================================
if ! command -v pm2 &> /dev/null; then
  log "Installing PM2 globally..."
  npm install -g pm2
else
  info "PM2 already installed: $(pm2 -v)"
fi

# ============================================================
#  STEP 4: Install PostgreSQL
# ============================================================
if ! command -v psql &> /dev/null; then
  log "Installing PostgreSQL..."
  apt install -y postgresql postgresql-contrib
  systemctl enable postgresql
  systemctl start postgresql
else
  info "PostgreSQL already installed: $(psql --version)"
fi

# ============================================================
#  STEP 5: Create PostgreSQL database & user
# ============================================================
log "Setting up PostgreSQL database..."
DB_PASS=$(openssl rand -base64 24 | tr -dc 'a-zA-Z0-9' | head -c 24)
sudo -u postgres psql -tc "SELECT 1 FROM pg_roles WHERE rolname='grace_user'" | grep -q 1 || \
  sudo -u postgres psql -c "CREATE USER grace_user WITH PASSWORD '$DB_PASS';"
sudo -u postgres psql -tc "SELECT 1 FROM pg_database WHERE datname='grace_db'" | grep -q 1 || \
  sudo -u postgres psql -c "CREATE DATABASE grace_db OWNER grace_user;"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE grace_db TO grace_user;"

log "Database credentials:"
info "  User:     grace_user"
info "  Password: $DB_PASS"
info "  Database: grace_db"
echo ""
warn "⚠️  SAVE THESE CREDENTIALS! They will not be shown again."
echo ""

# ============================================================
#  STEP 6: Clone/Copy project files
# ============================================================
if [ ! -d "$APP_DIR" ]; then
  log "Creating application directory..."
  mkdir -p "$APP_DIR"
fi

# If running from the project directory, copy files
if [ -f "package.json" ]; then
  log "Copying project files to $APP_DIR..."
  rsync -av --exclude='node_modules' --exclude='.git' --exclude='.env' . "$APP_DIR/"
else
  warn "No package.json found in current directory."
  warn "Please clone your repository into $APP_DIR manually:"
  info "  git clone <your-repo-url> $APP_DIR"
  read -p "Press Enter after cloning to continue..."
fi

# ============================================================
#  STEP 7: Configure Backend .env
# ============================================================
log "Creating backend .env file..."
JWT_SECRET=$(openssl rand -base64 48 | tr -dc 'a-zA-Z0-9' | head -c 48)

cat > "$BACKEND_DIR/.env" << EOF
DATABASE_URL=postgresql://grace_user:${DB_PASS}@localhost:5432/grace_db
JWT_SECRET=${JWT_SECRET}
JWT_EXPIRES_IN=7d
PORT=5000
NODE_ENV=production

MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your@email.com
MAIL_PASS=your_app_password
ADMIN_EMAIL=admin@graceinternational.com

SEED_EMAIL=superadmin@graceinternational.com
SEED_PASSWORD=SuperSecurePassword123!

CLIENT_URL=https://${DOMAIN}
EOF

warn "⚠️  Edit $BACKEND_DIR/.env to set your MAIL_* and SEED_* values!"

# ============================================================
#  STEP 8: Install Dependencies & Build Frontend
# ============================================================
log "Installing backend dependencies..."
cd "$BACKEND_DIR"
npm ci --production=false

log "Running Prisma migrations..."
npx prisma generate
npx prisma migrate deploy

log "Seeding database..."
npm run db:seed || warn "Seed may have already been run."

log "Installing frontend dependencies..."
cd "$APP_DIR"
npm ci

log "Building frontend..."
npm run build

# ============================================================
#  STEP 9: Configure Nginx
# ============================================================
log "Configuring Nginx..."
cat > /etc/nginx/sites-available/grace-international << NGINX
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN} www.${DOMAIN};

    # Frontend - Vue.js SPA
    root ${FRONTEND_DIST};
    index index.html;

    server_tokens off;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_min_length 256;
    gzip_types text/plain text/css text/javascript application/json application/javascript application/xml application/xml+rss image/svg+xml;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;

    # Client upload size (for blog images, team photos, etc.)
    client_max_body_size 10M;

    # API reverse proxy (no trailing slash — preserves /api/ prefix)
    location /api/ {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Cache Vite hashed assets aggressively (1 year)
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Block access to dotfiles (.env, .git, etc.)
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }

    # Vue.js HTML5 history mode
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Logging
    access_log /var/log/nginx/${DOMAIN}.access.log;
    error_log /var/log/nginx/${DOMAIN}.error.log;
}
NGINX

# Enable the site
ln -sf /etc/nginx/sites-available/grace-international /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

log "Testing Nginx configuration..."
nginx -t

log "Restarting Nginx..."
systemctl restart nginx
systemctl enable nginx

# ============================================================
#  STEP 10: Configure Firewall (UFW)
# ============================================================
log "Configuring firewall..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

# ============================================================
#  STEP 11: SSL Certificate with Let's Encrypt
# ============================================================
log "Installing Certbot via snap (recommended)..."
snap install --classic certbot 2>/dev/null || info "Certbot snap already installed"
ln -sf /snap/bin/certbot /usr/bin/certbot

log "Obtaining SSL certificate..."
certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --email "$SSL_EMAIL" --agree-tos --non-interactive --redirect

log "Verifying auto-renewal..."
certbot renew --dry-run || warn "Auto-renewal dry run failed. Check certbot logs."

# ============================================================
#  STEP 12: Start Application with PM2
# ============================================================
log "Starting application with PM2..."
cd "$APP_DIR"
pm2 start ecosystem.config.cjs --env production
pm2 save
pm2 startup systemd -u root --hp /root

# ============================================================
#  DONE!
# ============================================================
echo ""
echo -e "${GREEN}============================================================${NC}"
echo -e "${GREEN}  🎉 Deployment Complete!${NC}"
echo -e "${GREEN}============================================================${NC}"
echo ""
echo -e "  🌐 Website:   ${CYAN}https://${DOMAIN}${NC}"
echo -e "  🔧 API:       ${CYAN}https://${DOMAIN}/api/health${NC}"
echo -e ""
echo -e "  📋 Useful Commands:"
echo -e "     pm2 status              - Check process status"
echo -e "     pm2 logs grace-backend  - View backend logs"
echo -e "     pm2 restart all         - Restart application"
echo -e ""
echo -e "${YELLOW}  ⚠️  Don't forget to:${NC}"
echo -e "     1. Edit ${BACKEND_DIR}/.env (mail & seed settings)"
echo -e "     2. Point your domain DNS A record to this VPS IP"
echo -e "     3. Save the database credentials shown above"
echo -e ""
