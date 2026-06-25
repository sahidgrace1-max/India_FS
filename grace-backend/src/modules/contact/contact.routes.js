import { Router } from "express";
import validate from "../../middlewares/validate.js";
import { authenticate, authorize } from "../../middlewares/auth.js";
import { createContactSchema, updateContactStatusSchema } from "./contact.schema.js";
import * as contactController from "./contact.controller.js";

const router = Router();

router.post("/", validate(createContactSchema), contactController.create);

router.get(
  "/",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  contactController.getAll,
);

router.patch(
  "/:id/status",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  validate(updateContactStatusSchema),
  contactController.updateStatus,
);

export default router;