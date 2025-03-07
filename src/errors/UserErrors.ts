import { AppError } from "./AppError";

class UserError extends AppError {
  constructor(message: string, statusCode: number) {
    super(message, statusCode);
  }
}

class UserNotFoundError extends UserError {
  constructor(message = "User not found") {
    super(message, 404);
  }
}

class EmailAlreadyExistsError extends UserError {
  constructor(message = "Email already exists") {
    super(message, 409);
  }
}

class InvalidPasswordError extends UserError {
  constructor(message = "Invalid password") {
    super(message, 401);
  }
}

class UnauthorizedUserError extends UserError {
  constructor(message = "Unauthorized user") {
    super(message, 403);
  }
}

export {
  UserError,
  UserNotFoundError,
  EmailAlreadyExistsError,
  InvalidPasswordError,
  UnauthorizedUserError
};
