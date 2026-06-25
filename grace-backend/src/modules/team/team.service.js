import prisma from "../../config/db.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadDir = path.join(__dirname, "..", "..", "..", "uploads");

function deleteFile(filePathUrl) {
  if (!filePathUrl) return;
  const filename = filePathUrl.split("/").pop();
  const fullPath = path.join(uploadDir, filename);
  fs.unlink(fullPath, (err) => {
    if (err && err.code !== 'ENOENT') console.error("Failed to delete file:", err);
  });
}

const teamService = {
  async getAll(query) {
    const where = {};
    if (query.branch) {
      where.branch = { equals: query.branch, mode: "insensitive" };
    }
    return await prisma.teamMember.findMany({
      where,
      orderBy: { createdAt: "asc" },
    });
  },

  async getById(id) {
    const member = await prisma.teamMember.findUnique({ where: { id } });
    if (!member) {
      const err = new Error("Team member not found");
      err.statusCode = 404;
      throw err;
    }
    return member;
  },

  async create(data, file) {
    if (file) {
      data.image = "/api/uploads/" + file.filename;
    }
    return await prisma.teamMember.create({ data });
  },

  async update(id, data, file) {
    const existing = await prisma.teamMember.findUnique({ where: { id } });
    if (!existing) {
      const err = new Error("Team member not found");
      err.statusCode = 404;
      throw err;
    }
    
    if (file) {
      data.image = "/api/uploads/" + file.filename;
      deleteFile(existing.image);
    }

    // PREVENT PRISMA CRASH: Check if there is actually data to update
    if (Object.keys(data).length === 0) {
      const err = new Error("No valid fields provided for update");
      err.statusCode = 400;
      throw err;
    }

    return await prisma.teamMember.update({ where: { id }, data });
  },

  async remove(id) {
    const existing = await prisma.teamMember.findUnique({ where: { id } });
    if (!existing) {
      const err = new Error("Team member not found");
      err.statusCode = 404;
      throw err;
    }
    deleteFile(existing.image);
    return await prisma.teamMember.delete({ where: { id } });
  },
};

export default teamService;