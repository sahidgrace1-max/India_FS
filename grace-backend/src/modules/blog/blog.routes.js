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

// Upload inline image for blog content (TipTap editor)
router.post(
  "/upload-image",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  upload.single("image"),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image file provided." });
    }
    const imageUrl = "/api/uploads/" + req.file.filename;
    return res.status(200).json({ success: true, data: { url: imageUrl } });
  },
);

export default router;
