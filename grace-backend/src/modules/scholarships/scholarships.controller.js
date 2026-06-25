import asyncHandler from "../../utils/asyncHandler.js";
import { success } from "../../utils/apiResponse.js";
import scholarshipsService from "./scholarships.service.js";

export const getAll = asyncHandler(async (req, res) => {
  const result = await scholarshipsService.getAll(req.query);
  return success(res, result, "Scholarships retrieved successfully");
});

export const getBySlug = asyncHandler(async (req, res) => {
  const scholarship = await scholarshipsService.getBySlug(req.params.slug);
  return success(res, scholarship, "Scholarship retrieved successfully");
});

export const create = asyncHandler(async (req, res) => {
  const scholarship = await scholarshipsService.create(req.body);
  return success(res, scholarship, "Scholarship created successfully", 201);
});

export const update = asyncHandler(async (req, res) => {
  const scholarship = await scholarshipsService.update(req.params.id, req.body);
  return success(res, scholarship, "Scholarship updated successfully");
});

export const remove = asyncHandler(async (req, res) => {
  const scholarship = await scholarshipsService.remove(req.params.id);
  return success(res, scholarship, "Scholarship deleted successfully");
});

export const togglePublish = asyncHandler(async (req, res) => {
  const scholarship = await scholarshipsService.togglePublish(req.params.id);
  const message = scholarship.published
    ? "Scholarship published"
    : "Scholarship unpublished";
  return success(res, scholarship, message);
});
