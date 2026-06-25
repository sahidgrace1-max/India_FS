import { z } from "zod";

export const createTeamMemberSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    position: z.string().min(1, "Position is required"),
    description: z.string().min(1, "Description is required"),
    branch: z.string().min(1, "Branch is required"),
    linkedin: z.string().url("Must be a valid URL").optional().or(z.literal("")),
    facebook: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  }),
});

export const updateTeamMemberSchema = z.object({
  body: z
    .object({
      name: z.string().optional(),
      position: z.string().optional(),
      description: z.string().optional(),
      branch: z.string().optional(),
      linkedin: z.string().url("Must be a valid URL").optional().nullable().or(z.literal("")),
      facebook: z.string().url("Must be a valid URL").optional().nullable().or(z.literal("")),
    })
    .refine((data) => Object.keys(data).length > 0, {
      message: "At least one field must be updated",
    }),
});