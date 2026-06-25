import prisma from "../../config/db.js";

const universitiesService = {
  async getAll(query) {
    const where = {};
    if (query.destinationId) {
      where.destinationId = query.destinationId;
    }

    const universities = await prisma.university.findMany({
      where,
      orderBy: { name: "asc" },
      include: {
        destination: {
          select: { country: true, slug: true },
        },
      },
    });
    return universities;
  },

  async getById(id) {
    const university = await prisma.university.findUnique({
      where: { id },
      include: { destination: true },
    });
    if (!university) {
      const err = new Error("University not found");
      err.statusCode = 404;
      throw err;
    }
    return university;
  },

  async create(data, file) {
    if (file) {
      data.logoUrl = "/api/uploads/" + file.filename;
    }

    const destination = await prisma.destination.findUnique({
      where: { id: data.destinationId },
    });
    if (!destination) {
      const err = new Error("Destination not found");
      err.statusCode = 404;
      throw err;
    }

    const university = await prisma.university.create({ data });
    return university;
  },

  async update(id, data, file) {
    const existing = await prisma.university.findUnique({ where: { id } });
    if (!existing) {
      const err = new Error("University not found");
      err.statusCode = 404;
      throw err;
    }

    if (data.destinationId) {
      const destination = await prisma.destination.findUnique({
        where: { id: data.destinationId },
      });
      if (!destination) {
        const err = new Error("Destination not found");
        err.statusCode = 404;
        throw err;
      }
    }

    if (file) {
      data.logoUrl = "/api/uploads/" + file.filename;
    }

    const updated = await prisma.university.update({ where: { id }, data });
    return updated;
  },

  async remove(id) {
    const existing = await prisma.university.findUnique({ where: { id } });
    if (!existing) {
      const err = new Error("University not found");
      err.statusCode = 404;
      throw err;
    }
    const deleted = await prisma.university.delete({ where: { id } });
    return deleted;
  },
};

export default universitiesService;
