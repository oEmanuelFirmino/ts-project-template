import { AppError } from "./AppError";

class HttpError extends AppError {
  constructor(message: string, statusCode: number) {
    super(message, statusCode);
  }
}

class BadRequestError extends AppError {
  constructor(message = "Bad Request") {
    super(message, 400)
  }
}

class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}

class ForbiddenError extends AppError {
  constructor(message = "Forbidden") {
    super(message, 403);
  }
}

class NotFoundError extends AppError {
  constructor(message = "Not Found") {
    super(message, 404);
  }
}

class InternalServerError extends AppError {
  constructor(message = "Internal Server Error") {
    super(message, 500);
  }
}

export { HttpError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, InternalServerError };