import { Router } from "express";
import { authenticate, authorize } from "../../middlewares/auth.js";
import validate from "../../middlewares/validate.js";
import upload from "../../middlewares/upload.js";
import { createBlogSchema, updateBlogSchema } from "./blog.schema.js";
import * as controller from "./blog.controller.js";

const router = Router();

router.get("/", controller.getAll);
router.get("/:slug", controller.getBySlug);

router.post(
  "/",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  upload.single("thumbnail"),
  validate(createBlogSchema),
  controller.create,
);

router.patch(
  "/:id",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  upload.single("thumbnail"),
  validate(updateBlogSchema),
  controller.update,
);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  controller.remove,
);

router.patch(
  "/:id/publish",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  controller.togglePublish,
);

export default router;
