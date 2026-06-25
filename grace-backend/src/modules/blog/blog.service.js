import prisma from "../../config/db.js";
import crypto from "crypto";
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

function generateSlug(text) {
  const baseSlug = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const hash = crypto.randomBytes(3).toString("hex");
  return `${baseSlug}-${hash}`;
}

const blogService = {
  async getAll(query) {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const skip = (page - 1) * limit;

    const where = {};
    if (query.published !== undefined) {
      where.published = query.published === "true";
    }

    const [items, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.blogPost.count({ where }),
    ]);

    return {
      items,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  },

  async getBySlug(slug) {
    const blog = await prisma.blogPost.findUnique({ where: { slug } });
    if (!blog) {
      const err = new Error("Blog post not found");
      err.statusCode = 404;
      throw err;
    }
    return blog;
  },

  async create(data, file) {
    if (!data.slug) {
      data.slug = generateSlug(data.title);
    }
    if (file) {
      data.thumbnail = "/api/uploads/" + file.filename;
    }
    return await prisma.blogPost.create({ data });
  },

  async update(id, data, file) {
    const existing = await prisma.blogPost.findUnique({ where: { id } });
    if (!existing) {
      const err = new Error("Blog post not found");
      err.statusCode = 404;
      throw err;
    }
    
    if (!data.slug && data.title && data.title !== existing.title) {
      data.slug = generateSlug(data.title);
    }
    
    if (file) {
      data.thumbnail = "/api/uploads/" + file.filename;
      deleteFile(existing.thumbnail);
    }

    if (Object.keys(data).length === 0) {
      const err = new Error("No valid fields provided for update");
      err.statusCode = 400;
      throw err;
    }

    return await prisma.blogPost.update({ where: { id }, data });
  },

  async remove(id) {
    const existing = await prisma.blogPost.findUnique({ where: { id } });
    if (!existing) {
      const err = new Error("Blog post not found");
      err.statusCode = 404;
      throw err;
    }
    deleteFile(existing.thumbnail);
    return await prisma.blogPost.delete({ where: { id } });
  },

  async togglePublish(id) {
    const existing = await prisma.blogPost.findUnique({ where: { id } });
    if (!existing) {
      const err = new Error("Blog post not found");
      err.statusCode = 404;
      throw err;
    }
    return await prisma.blogPost.update({
      where: { id },
      data: { published: !existing.published },
    });
  },
};

export default blogService;