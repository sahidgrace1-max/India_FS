import prisma from "../../config/db.js";

function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const destinationsService = {
  async getAll() {
    const destinations = await prisma.destination.findMany({
      orderBy: { country: "asc" },
      include: {
        _count: {
          select: { universities: true },
        },
      },
    });
    return destinations;
  },

  async getBySlug(slug) {
    const destination = await prisma.destination.findUnique({
      where: { slug },
      include: { universities: true },
    });
    if (!destination) {
      const err = new Error("Destination not found");
      err.statusCode = 404;
      throw err;
    }
    return destination;
  },

  async create(data, file) {
    if (!data.slug) {
      data.slug = generateSlug(data.country);
    }
    if (file) {
      data.imageUrl = "/api/uploads/" + file.filename;
    }
    const destination = await prisma.destination.create({ data });
    return destination;
  },

  async update(id, data, file) {
    const existing = await prisma.destination.findUnique({ where: { id } });
    if (!existing) {
      const err = new Error("Destination not found");
      err.statusCode = 404;
      throw err;
    }

    if (!data.slug && data.country && data.country !== existing.country) {
      data.slug = generateSlug(data.country);
    }

    if (file) {
      data.imageUrl = "/api/uploads/" + file.filename;
    }

    const updated = await prisma.destination.update({ where: { id }, data });
    return updated;
  },

  async remove(id) {
    const existing = await prisma.destination.findUnique({ where: { id } });
    if (!existing) {
      const err = new Error("Destination not found");
      err.statusCode = 404;
      throw err;
    }
    const deleted = await prisma.destination.delete({ where: { id } });
    return deleted;
  },
};

export default destinationsService;
