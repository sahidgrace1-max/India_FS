import asyncHandler from "../../utils/asyncHandler.js";
import { success } from "../../utils/apiResponse.js";
import * as inquiryService from "./inquiries.service.js";

export const create = asyncHandler(async (req, res) => {
  const data = await inquiryService.create(req.body);
  return success(res, data, "Inquiry submitted successfully", 201);
});

export const getAll = asyncHandler(async (req, res) => {
  const data = await inquiryService.getAll(req.query);
  return success(res, data, "Inquiries retrieved", 200);
});

export const getById = asyncHandler(async (req, res) => {
  const data = await inquiryService.getById(req.params.id);
  return success(res, data, "Inquiry retrieved", 200);
});

export const update = asyncHandler(async (req, res) => {
  const data = await inquiryService.update(req.params.id, req.body);
  return success(res, data, "Inquiry updated", 200);
});
