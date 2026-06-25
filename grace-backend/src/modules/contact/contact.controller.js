import asyncHandler from "../../utils/asyncHandler.js";
import { success } from "../../utils/apiResponse.js";
import * as contactService from "./contact.service.js";

export const create = asyncHandler(async (req, res) => {
  const data = await contactService.create(req.body);
  return success(res, data, "Contact submission received", 201);
});

export const getAll = asyncHandler(async (req, res) => {
  const data = await contactService.getAll(req.query);
  return success(res, data, "Contact submissions retrieved", 200);
});

export const updateStatus = asyncHandler(async (req, res) => {
  const { isRead } = req.body;
  const data = await contactService.updateStatus(req.params.id, isRead);
  return success(res, data, `Contact submission marked as ${isRead ? 'read' : 'unread'}`, 200);
});