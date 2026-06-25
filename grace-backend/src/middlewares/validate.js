import { ZodError } from "zod";
import fs from "fs";

const validate = (schema) => {
  return (req, res, next) => {
    try {
      // 1. Pass everything to Zod
      const validatedData = schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      // 2. FIX: Only overwrite if Zod actually returned data for that property.
      // Otherwise, fallback to the original req object so we don't lose req.params.id!
      req.body = validatedData.body ?? req.body;
      req.query = validatedData.query ?? req.query;
      req.params = validatedData.params ?? req.params;

      next();
    } catch (error) {
      // Clean up uploaded file if validation fails
      if (req.file) {
        fs.unlink(req.file.path, (err) => {
          if (err && err.code !== 'ENOENT') console.error("Failed to clean up file:", err);
        });
      }

      if (error instanceof ZodError) {
        const errors = error.errors.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        }));

        return res.status(422).json({
          success: false,
          message: "Validation failed",
          errors,
        });
      }
      next(error);
    }
  };
};

export default validate;