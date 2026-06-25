import "dotenv/config";
import prisma from "../config/db.js";
import bcrypt from "bcrypt";

async function seed() {
  try {
    const existingUsers = await prisma.user.count();

    if (existingUsers > 0) {
      console.log("⚠️  Users already exist. Skipping seed.");
      return;
    }

    const email = process.env.SEED_EMAIL;
    const password = process.env.SEED_PASSWORD;

    if (!email || !password) {
      console.error("❌ SEED_EMAIL and SEED_PASSWORD must be set in .env");
      process.exit(1);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: "SUPERADMIN",
      },
    });

    console.log(`✅ Super-admin created: ${user.email} (${user.id})`);
  } catch (error) {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed();