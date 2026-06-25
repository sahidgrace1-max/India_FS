import { Router } from "express";
import { authenticate, authorize } from "../../middlewares/auth.js";
import validate from "../../middlewares/validate.js";
import upload from "../../middlewares/upload.js";
import {
  createUniversitySchema,
  updateUniversitySchema,
} from "./universities.schema.js";
import * as controller from "./universities.controller.js";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

router.post(
  "/",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  upload.single("logo"),
  validate(createUniversitySchema),
  controller.create,
);

router.put(
  "/:id",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  upload.single("logo"),
  validate(updateUniversitySchema),
  controller.update,
);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  controller.remove,
);

export default router;
