<template>
  <footer
    class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-12 pb-4 font-sans relative overflow-hidden"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="floating-circle"></div>
      <div class="floating-circle-2"></div>
    </div>

    <div
      class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
    >
      <!-- Logo & App Download -->
      <div class="flex flex-col space-y-6 fade-in-up">
        <img
          src="@/assets/logo.png"
          alt="Grace International Logo"
          class="w-24 sm:w-28 md:w-32 lg:w-36 mb-2 hover-lift"
        />
        <p class="text-sm text-gray-400 leading-relaxed">
          Your gateway to global education excellence
        </p>
      </div>

      <!-- Quick Links -->
      <div class="fade-in-up" style="animation-delay: 0.1s">
        <h3
          class="text-lg font-semibold mb-4 text-green-400 relative inline-block"
        >
          QUICK LINKS
          <span class="underline-animation"></span>
        </h3>
        <ul class="space-y-2">
          <li class="link-item">
            <router-link to="/" class="footer-link">
              <i class="fas fa-chevron-right text-xs mr-2 text-green-400"></i>
              Events
            </router-link>
          </li>
          <li class="link-item">
            <router-link to="/about" class="footer-link">
              <i class="fas fa-chevron-right text-xs mr-2 text-green-400"></i>
              Latest News
            </router-link>
          </li>
          <li class="link-item">
            <router-link to="/destinations/australia" class="footer-link">
              <i class="fas fa-chevron-right text-xs mr-2 text-green-400"></i>
              Explore Countries
            </router-link>
          </li>
          <li class="link-item">
            <router-link to="/university/australia" class="footer-link">
              <i class="fas fa-chevron-right text-xs mr-2 text-green-400"></i>
              Australian Universities
            </router-link>
          </li>
          <li class="link-item">
            <router-link to="/scholarships" class="footer-link">
              <i class="fas fa-chevron-right text-xs mr-2 text-green-400"></i>
              Scholarships
            </router-link>
          </li>
          <li class="link-item">
            <router-link to="/our-services" class="footer-link">
              <i class="fas fa-chevron-right text-xs mr-2 text-green-400"></i>
              Vacancy
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Offices 1 -->
      <div class="space-y-4 fade-in-up w-full" style="animation-delay: 0.2s">
        <div class="office-card w-full">
          <h3 class="font-semibold text-green-400 mb-2">HEAD OFFICE</h3>
          <p class="text-sm text-gray-300 mb-1">
            <i class="fas fa-map-marker-alt text-green-400 mr-2"></i>
            New Baneshwor, Kathmandu, Nepal
          </p>
          <p class="text-sm text-gray-300 mb-1 break-all">
            <i class="fas fa-envelope text-green-400 mr-2"></i>
            enquiry@grace.edu.np
          </p>
          <p class="text-sm text-gray-300">
            <i class="fas fa-phone text-green-400 mr-2"></i>
            (01) 4796880 / (01)4796881
          </p>
        </div>
      </div>

      <!-- Offices 2 -->
      <div class="space-y-4 fade-in-up w-full" style="animation-delay: 0.3s">
        <div class="office-card w-full">
          <h3 class="font-semibold text-green-400 mb-2">INDIA OFFICE</h3>
          <p class="text-sm text-gray-300 mb-1 break-all">
            <i class="fas fa-envelope text-green-400 mr-2"></i>
            enquiry.in@graceintlgroup.com
          </p>
          <p class="text-sm text-gray-300">
            <i class="fas fa-phone text-green-400 mr-2"></i>
            +91-011-41070020
          </p>
        </div>
        <div class="office-card w-full">
          <h3 class="font-semibold text-green-400 mb-2">KENYA OFFICE</h3>
          <p class="text-sm text-gray-300 mb-1 break-all">
            <i class="fas fa-envelope text-green-400 mr-2"></i>
            admission.ke@graceintlgroup.com
          </p>
          <p class="text-sm text-gray-300">
            <i class="fas fa-phone text-green-400 mr-2"></i>
            +254 719-231 999
          </p>
        </div>
        <div class="office-card w-full" style="margin-bottom: 0;">
          <h3 class="font-semibold text-green-400 mb-2">BANGLADESH OFFICE</h3>
          <p class="text-sm text-gray-300 mb-1 break-all">
            <i class="fas fa-envelope text-green-400 mr-2"></i>
            director.bangladesh@graceintlgroup.com
          </p>
          <p class="text-sm text-gray-300">
            <i class="fas fa-phone text-green-400 mr-2"></i>
            +92 (335) 5441602
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="border-t border-gray-700 mt-10 pt-6 relative z-10">
      <div
        class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between"
      >
        <span class="text-sm mb-4 md:mb-0 text-gray-400">
          Copyright © 2023. Grace International. All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Fade in up animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

/* Hover lift effect */
.hover-lift {
  transition: transform 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
}

/* Underline animation for headings */
.underline-animation {
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #10b981, #34d399);
  transition: width 0.3s ease;
}

.fade-in-up:hover .underline-animation {
  width: 100%;
}

/* Footer links */
.footer-link {
  display: inline-flex;
  align-items: center;
  color: #d1d5db;
  transition: all 0.3s ease;
  position: relative;
}

.footer-link:hover {
  color: #10b981;
  transform: translateX(5px);
}

.footer-link i {
  transition: transform 0.3s ease;
}

.footer-link:hover i {
  transform: translateX(3px);
}

/* Link items staggered animation */
.link-item {
  animation: fadeInLeft 0.5s ease-out forwards;
  opacity: 0;
}

.link-item:nth-child(1) { animation-delay: 0.1s; }
.link-item:nth-child(2) { animation-delay: 0.2s; }
.link-item:nth-child(3) { animation-delay: 0.3s; }
.link-item:nth-child(4) { animation-delay: 0.4s; }
.link-item:nth-child(5) { animation-delay: 0.5s; }
.link-item:nth-child(6) { animation-delay: 0.6s; }

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Office cards */
.office-card {
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border: 1px solid rgba(16, 185, 129, 0.1);
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  word-break: break-word;
  overflow-wrap: break-word;
}

.office-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.1);
}

.office-card:last-child {
  margin-bottom: 0;
  padding-bottom: 16px;
}

/* Social icons */
.social-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  color: #d1d5db;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-icon:hover {
  background: #10b981;
  color: white;
  transform: translateY(-3px) rotate(5deg);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  border-color: #10b981;
}

/* Heartbeat animation */
@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  10%, 30% { transform: scale(1.1); }
  20%, 40% { transform: scale(1.15); }
}

.heartbeat {
  display: inline-block;
  animation: heartbeat 1.5s ease-in-out infinite;
}

/* Underline hover effect */
.underline-hover {
  position: relative;
}

.underline-hover::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #10b981;
  transition: width 0.3s ease;
}

.underline-hover:hover::after {
  width: 100%;
}

/* Floating background circles */
.floating-circle {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
  top: -100px;
  right: -100px;
  animation: float 20s ease-in-out infinite;
}

.floating-circle-2 {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, transparent 70%);
  bottom: -150px;
  left: -150px;
  animation: float 25s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -30px) scale(1.1); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .office-card {
    padding: 12px;
  }

  .social-icon {
    width: 36px;
    height: 36px;
  }
}
</style>