import { z } from "zod";

export const createBlogSchema = z.object({
  body: z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    slug: z.string().optional(),
    excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
    content: z.string().min(50, "Content must be at least 50 characters"),
    published: z
      .preprocess((val) => {
        if (val === undefined || val === null) return undefined;
        return val === "true" || val === true;
      }, z.boolean())
      .optional(),
  })
});

export const updateBlogSchema = z.object({
  body: z.object({
    title: z.string().min(3).optional(),
    slug: z.string().optional().nullable(),
    excerpt: z.string().min(10).optional(),
    content: z.string().min(50).optional(),
    published: z
      .preprocess((val) => {
        if (val === undefined || val === null) return undefined;
        return val === "true" || val === true;
      }, z.boolean())
      .optional(),
  })
});