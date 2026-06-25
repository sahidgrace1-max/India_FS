import asyncHandler from "../../utils/asyncHandler.js";
import { success } from "../../utils/apiResponse.js";
import universitiesService from "./universities.service.js";

export const getAll = asyncHandler(async (req, res) => {
  const universities = await universitiesService.getAll(req.query);
  return success(res, universities, "Universities retrieved successfully");
});

export const getById = asyncHandler(async (req, res) => {
  const university = await universitiesService.getById(req.params.id);
  return success(res, university, "University retrieved successfully");
});

export const create = asyncHandler(async (req, res) => {
  const university = await universitiesService.create(req.body, req.file);
  return success(res, university, "University created successfully", 201);
});

export const update = asyncHandler(async (req, res) => {
  const university = await universitiesService.update(
    req.params.id,
    req.body,
    req.file,
  );
  return success(res, university, "University updated successfully");
});

export const remove = asyncHandler(async (req, res) => {
  const university = await universitiesService.remove(req.params.id);
  return success(res, university, "University deleted successfully");
});
