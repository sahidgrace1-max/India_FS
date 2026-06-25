import asyncHandler from "../../utils/asyncHandler.js";
import { success } from "../../utils/apiResponse.js";
import blogService from "./blog.service.js";

export const getAll = asyncHandler(async (req, res) => {
  const result = await blogService.getAll(req.query);
  return success(res, result, "Blog posts retrieved successfully");
});

export const getBySlug = asyncHandler(async (req, res) => {
  const blog = await blogService.getBySlug(req.params.slug);
  return success(res, blog, "Blog post retrieved successfully");
});

export const create = asyncHandler(async (req, res) => {
  const blog = await blogService.create(req.body, req.file);
  return success(res, blog, "Blog post created successfully", 201);
});

export const update = asyncHandler(async (req, res) => {
  const blog = await blogService.update(req.params.id, req.body, req.file);
  return success(res, blog, "Blog post updated successfully");
});

export const remove = asyncHandler(async (req, res) => {
  const blog = await blogService.remove(req.params.id);
  return success(res, blog, "Blog post deleted successfully");
});

export const togglePublish = asyncHandler(async (req, res) => {
  const blog = await blogService.togglePublish(req.params.id);
  const message = blog.published
    ? "Blog post published"
    : "Blog post unpublished";
  return success(res, blog, message);
});
