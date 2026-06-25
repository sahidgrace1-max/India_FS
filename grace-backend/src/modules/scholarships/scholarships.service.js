import prisma from "../../config/db.js";

function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const scholarshipsService = {
  async getAll(query) {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const skip = (page - 1) * limit;

    const where = {};
    if (query.published !== undefined) {
      where.published = true;
    }
    if (query.country) {
      where.country = query.country;
    }

    const [items, total] = await Promise.all([
      prisma.scholarship.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.scholarship.count({ where }),
    ]);

    return {
      items,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  },

  async getBySlug(slug) {
    const scholarship = await prisma.scholarship.findUnique({
      where: { slug },
    });
    if (!scholarship) {
      const err = new Error("Scholarship not found");
      err.statusCode = 404;
      throw err;
    }
    return scholarship;
  },

  async create(data) {
    if (!data.slug) {
      data.slug = generateSlug(data.title);
    }
    if (data.deadline) {
      data.deadline = new Date(data.deadline);
    }
    const scholarship = await prisma.scholarship.create({ data });
    return scholarship;
  },

  async update(id, data) {
    const existing = await prisma.scholarship.findUnique({ where: { id } });
    if (!existing) {
      const err = new Error("Scholarship not found");
      err.statusCode = 404;
      throw err;
    }

    if (data.deadline) {
      data.deadline = new Date(data.deadline);
    }

    if (!data.slug && data.title && data.title !== existing.title) {
      data.slug = generateSlug(data.title);
    }

    const updated = await prisma.scholarship.update({ where: { id }, data });
    return updated;
  },

  async remove(id) {
    const existing = await prisma.scholarship.findUnique({ where: { id } });
    if (!existing) {
      const err = new Error("Scholarship not found");
      err.statusCode = 404;
      throw err;
    }
    const deleted = await prisma.scholarship.delete({ where: { id } });
    return deleted;
  },

  async togglePublish(id) {
    const existing = await prisma.scholarship.findUnique({ where: { id } });
    if (!existing) {
      const err = new Error("Scholarship not found");
      err.statusCode = 404;
      throw err;
    }
    const updated = await prisma.scholarship.update({
      where: { id },
      data: { published: !existing.published },
    });
    return updated;
  },
};

export default scholarshipsService;
