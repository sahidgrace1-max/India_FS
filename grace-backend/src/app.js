import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./modules/auth/auth.routes.js";
import contactRoutes from "./modules/contact/contact.routes.js";
import inquiriesRoutes from "./modules/inquiries/inquiries.routes.js";
import blogRoutes from "./modules/blog/blog.routes.js";
import destinationsRoutes from "./modules/destinations/destinations.routes.js";
import universitiesRoutes from "./modules/universities/universities.routes.js";
import scholarshipsRoutes from "./modules/scholarships/scholarships.routes.js";
import teamRoutes from "./modules/team/team.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// --------------- Middleware ---------------
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files
app.use("/api/uploads", express.static(path.join(__dirname, "..", "uploads")));

// --------------- Routes ---------------
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/inquiries", inquiriesRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/destinations", destinationsRoutes);
app.use("/api/universities", universitiesRoutes);
app.use("/api/scholarships", scholarshipsRoutes);
app.use("/api/team", teamRoutes);

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ success: true, message: "Grace International API is running" });
});

// --------------- 404 Handler ---------------
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// --------------- Global Error Handler ---------------
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error("❌ Error:", err);

  const statusCode = err.statusCode || 500;
  const response = {
    success: false,
    message: err.message || "Internal Server Error",
  };

  if (err.errors) {
    response.errors = err.errors;
  }

  // Never expose stack traces in production
  if (process.env.NODE_ENV !== "production" && err.stack) {
    response.stack = err.stack;
  }

  res.status(statusCode).json(response);
});

export default app;
