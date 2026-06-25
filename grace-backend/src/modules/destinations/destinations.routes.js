import { Router } from "express";
import { authenticate, authorize } from "../../middlewares/auth.js";
import validate from "../../middlewares/validate.js";
import upload from "../../middlewares/upload.js";
import {
  createDestinationSchema,
  updateDestinationSchema,
} from "./destinations.schema.js";
import * as controller from "./destinations.controller.js";

const router = Router();

router.get("/", controller.getAll);
router.get("/:slug", controller.getBySlug);

router.post(
  "/",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  upload.single("image"),
  validate(createDestinationSchema),
  controller.create,
);

router.patch(
  "/:id",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  upload.single("image"),
  validate(updateDestinationSchema),
  controller.update,
);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  controller.remove,
);

export default router;
