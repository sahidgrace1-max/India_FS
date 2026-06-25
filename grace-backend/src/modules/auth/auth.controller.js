import asyncHandler from "../../utils/asyncHandler.js";
import { success } from "../../utils/apiResponse.js";
import * as authService from "./auth.service.js";

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const data = await authService.login(email, password);
  return success(res, data, "Login successful", 200);
});

export const getMe = asyncHandler(async (req, res) => {
  const user = await authService.getMe(req.user.id);
  return success(res, user, "User profile retrieved", 200);
});

export const seed = asyncHandler(async (req, res) => {
  const user = await authService.seedAdmin();
  return success(res, user, "Admin seeded successfully", 201);
});
