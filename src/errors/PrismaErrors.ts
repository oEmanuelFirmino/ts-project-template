import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { AppError } from "./AppError";

class PrismaError extends AppError {
  constructor(message: string, statusCode: number) {
    super(message, statusCode);
  }

  static fromPrismaError(error: any): PrismaError {
    if (error instanceof PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2002":
          return new UniqueConstraintError();
        case "P2003":
          return new ForeignKeyConstraintError();
        case "P2025":
          return new RecordNotFoundError();
        default:
          return new GenericDatabaseError();
      }
    }

    if (error instanceof PrismaClientValidationError) {
      return new ValidationError();
    }

    if (error instanceof PrismaClientRustPanicError) {
      return new DatabasePanicError();
    }

    if (error instanceof PrismaClientInitializationError) {
      return new DatabaseInitializationError();
    }

    if (error instanceof PrismaClientUnknownRequestError) {
      return new UnknownDatabaseError();
    }

    return new GenericDatabaseError();
  }
}

class UniqueConstraintError extends PrismaError {
  constructor(message = "Unique constraint failed") {
    super(message, 409);
  }
}

class ForeignKeyConstraintError extends PrismaError {
  constructor(message = "Foreign key constraint failed") {
    super(message, 400);
  }
}

class RecordNotFoundError extends PrismaError {
  constructor(message = "Record not found") {
    super(message, 404);
  }
}

class ValidationError extends PrismaError {
  constructor(message = "Validation error") {
    super(message, 400);
  }
}

class DatabasePanicError extends PrismaError {
  constructor(message = "Database panic error") {
    super(message, 500);
  }
}

class DatabaseInitializationError extends PrismaError {
  constructor(message = "Database initialization error") {
    super(message, 500);
  }
}

class UnknownDatabaseError extends PrismaError {
  constructor(message = "Unknown database error") {
    super(message, 500);
  }
}

class GenericDatabaseError extends PrismaError {
  constructor(message = "Database error") {
    super(message, 500);
  }
}

export {
  PrismaError,
  UniqueConstraintError,
  ForeignKeyConstraintError,
  RecordNotFoundError,
  ValidationError,
  DatabasePanicError,
  DatabaseInitializationError,
  UnknownDatabaseError,
  GenericDatabaseError,
};
