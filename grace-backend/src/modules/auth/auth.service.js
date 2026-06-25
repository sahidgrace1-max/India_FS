import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../config/db.js";

if (!process.env.JWT_SECRET) {
  console.warn("⚠️ WARNING: JWT_SECRET is not defined in the environment variables.");
}

export async function login(email, password) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    const err = new Error("Invalid credentials");
    err.statusCode = 401;
    throw err;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    const err = new Error("Invalid credentials");
    err.statusCode = 401;
    throw err;
  }

  const accessToken = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" },
  );

  return {
    accessToken,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  };
}

export async function getMe(userId) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, email: true, role: true, createdAt: true },
  });

  if (!user) {
    const err = new Error("User not found");
    err.statusCode = 404;
    throw err;
  }

  return user;
}

export async function seedAdmin() {
  if (!process.env.SEED_PASSWORD || !process.env.SEED_EMAIL) {
    const err = new Error("Seed environment variables are missing");
    err.statusCode = 500;
    throw err;
  }

  const count = await prisma.user.count();

  if (count > 0) {
    const err = new Error("Admin user already exists");
    err.statusCode = 409;
    throw err;
  }

  const hashedPassword = await bcrypt.hash(process.env.SEED_PASSWORD, 12);

  const user = await prisma.user.create({
    data: {
      email: process.env.SEED_EMAIL,
      password: hashedPassword,
      role: "SUPERADMIN",
    },
    select: { id: true, email: true, role: true, createdAt: true },
  });

  return user;
}