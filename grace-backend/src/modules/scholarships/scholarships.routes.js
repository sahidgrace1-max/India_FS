import { Router } from "express";
import { authenticate, authorize } from "../../middlewares/auth.js";
import validate from "../../middlewares/validate.js";
import {
  createScholarshipSchema,
  updateScholarshipSchema,
} from "./scholarships.schema.js";
import * as controller from "./scholarships.controller.js";

const router = Router();

router.get("/", controller.getAll);
router.get("/:slug", controller.getBySlug);

router.post(
  "/",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  validate(createScholarshipSchema),
  controller.create,
);

router.put(
  "/:id",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  validate(updateScholarshipSchema),
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
