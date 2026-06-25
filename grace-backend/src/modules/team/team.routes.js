import { Router } from "express";
import validate from "../../middlewares/validate.js";
import { authenticate, authorize } from "../../middlewares/auth.js";
import upload from "../../middlewares/upload.js";
import {
  createTeamMemberSchema,
  updateTeamMemberSchema,
} from "./team.schema.js";
import * as teamController from "./team.controller.js";

const router = Router();

router.get("/", teamController.getAll);
router.get("/:id", teamController.getById);

router.post(
  "/",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  upload.single("image"),
  validate(createTeamMemberSchema),
  teamController.create,
);

router.patch(
  "/:id",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  upload.single("image"),
  validate(updateTeamMemberSchema),
  teamController.update,
);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN", "SUPERADMIN"),
  teamController.remove,
);

export default router;
