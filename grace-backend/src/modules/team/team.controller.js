import asyncHandler from "../../utils/asyncHandler.js";
import { success } from "../../utils/apiResponse.js";
import teamService from "./team.service.js";

export const getAll = asyncHandler(async (req, res) => {
  const data = await teamService.getAll(req.query);
  return success(res, data, "Team members retrieved", 200);
});

export const getById = asyncHandler(async (req, res) => {
  const data = await teamService.getById(req.params.id);
  return success(res, data, "Team member retrieved", 200);
});

export const create = asyncHandler(async (req, res) => {
  const data = await teamService.create(req.body, req.file);
  return success(res, data, "Team member created", 201);
});

export const update = asyncHandler(async (req, res) => {
  const data = await teamService.update(req.params.id, req.body, req.file);
  return success(res, data, "Team member updated", 200);
});

export const remove = asyncHandler(async (req, res) => {
  await teamService.remove(req.params.id);
  return success(res, null, "Team member deleted", 200);
});
