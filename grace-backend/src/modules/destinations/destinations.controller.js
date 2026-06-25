import asyncHandler from "../../utils/asyncHandler.js";
import { success } from "../../utils/apiResponse.js";
import destinationsService from "./destinations.service.js";

export const getAll = asyncHandler(async (req, res) => {
  const destinations = await destinationsService.getAll();
  return success(res, destinations, "Destinations retrieved successfully");
});

export const getBySlug = asyncHandler(async (req, res) => {
  const destination = await destinationsService.getBySlug(req.params.slug);
  return success(res, destination, "Destination retrieved successfully");
});

export const create = asyncHandler(async (req, res) => {
  const destination = await destinationsService.create(req.body, req.file);
  return success(res, destination, "Destination created successfully", 201);
});

export const update = asyncHandler(async (req, res) => {
  const destination = await destinationsService.update(
    req.params.id,
    req.body,
    req.file,
  );
  return success(res, destination, "Destination updated successfully");
});

export const remove = asyncHandler(async (req, res) => {
  const destination = await destinationsService.remove(req.params.id);
  return success(res, destination, "Destination deleted successfully");
});
