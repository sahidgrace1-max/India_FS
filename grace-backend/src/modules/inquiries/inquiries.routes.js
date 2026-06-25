import { Router } from "express";
import validate from "../../middlewares/validate.js";
import { authenticate, authorize } from "../../middlewares/auth.js";
import {
  createInquirySchema,
  updateInquirySchema,
} from "./inquiries.schema.js";
import * as inquiryController from "./inquiries.controller.js";

const router = Router();

router.post("/", validate(createInquirySchema), inquiryController.create);
router.get(
  "/",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  inquiryController.getAll,
);
router.get(
  "/:id",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  inquiryController.getById,
);
router.patch(
  "/:id",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  validate(updateInquirySchema),
  inquiryController.update,
);

export default router;
