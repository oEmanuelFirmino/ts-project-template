import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import { PrismaError } from "../errors/PrismaErrors"
import { UserError } from "../errors/UserErrors";
import { HttpError } from "../errors/HttpErrors";

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message,
    });
  }

  if (err instanceof PrismaError) {
    return res.status(500).json({
      error: err.message,
    });
  }

  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({
      error: err.message,
    });
  }

  if (err instanceof UserError) {
    return res.status(err.statusCode).json({
      error: err.message,
    });
  }

  console.error("❌ Unexpected Error:", err);
  return res.status(500).json({
    error: "Internal Server Error",
  });
};

