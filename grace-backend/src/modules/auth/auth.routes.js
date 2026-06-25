import { Router } from "express";
import validate from "../../middlewares/validate.js";
import { authenticate } from "../../middlewares/auth.js";
import { loginSchema } from "./auth.schema.js";
import * as authController from "./auth.controller.js";

const router = Router();

router.post("/login", validate(loginSchema), authController.login);
router.get("/me", authenticate, authController.getMe);
router.post("/seed", authController.seed);

export default router;
