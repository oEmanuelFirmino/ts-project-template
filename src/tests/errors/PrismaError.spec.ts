import {
  PrismaError,
  UniqueConstraintError,
  ForeignKeyConstraintError,
  RecordNotFoundError,
  ValidationError,
  DatabasePanicError,
  DatabaseInitializationError,
  UnknownDatabaseError,
  GenericDatabaseError,
} from "../../errors/PrismaErrors";
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";

describe("Prisma Errors", () => {
  it("should create a UniqueConstraintError with default message and status code 409", () => {
    const error = new UniqueConstraintError();
    expect(error.message).toBe("Unique constraint failed");
    expect(error.statusCode).toBe(409);
  });

  it("should create a ForeignKeyConstraintError with default message and status code 400", () => {
    const error = new ForeignKeyConstraintError();
    expect(error.message).toBe("Foreign key constraint failed");
    expect(error.statusCode).toBe(400);
  });

  it("should create a RecordNotFoundError with default message and status code 404", () => {
    const error = new RecordNotFoundError();
    expect(error.message).toBe("Record not found");
    expect(error.statusCode).toBe(404);
  });

  it("should create a ValidationError with default message and status code 400", () => {
    const error = new ValidationError();
    expect(error.message).toBe("Validation error");
    expect(error.statusCode).toBe(400);
  });

  it("should create a DatabasePanicError with default message and status code 500", () => {
    const error = new DatabasePanicError();
    expect(error.message).toBe("Database panic error");
    expect(error.statusCode).toBe(500);
  });

  it("should create a DatabaseInitializationError with default message and status code 500", () => {
    const error = new DatabaseInitializationError();
    expect(error.message).toBe("Database initialization error");
    expect(error.statusCode).toBe(500);
  });

  it("should create an UnknownDatabaseError with default message and status code 500", () => {
    const error = new UnknownDatabaseError();
    expect(error.message).toBe("Unknown database error");
    expect(error.statusCode).toBe(500);
  });

  it("should create a GenericDatabaseError with default message and status code 500", () => {
    const error = new GenericDatabaseError();
    expect(error.message).toBe("Database error");
    expect(error.statusCode).toBe(500);
  });

  describe("fromPrismaError", () => {
    it("should return a UniqueConstraintError for P2002", () => {
      const error = new PrismaClientKnownRequestError("Unique constraint failed", {
        code: "P2002",
        clientVersion: "3.0.0",
      });
      const prismaError = PrismaError.fromPrismaError(error);
      expect(prismaError).toBeInstanceOf(UniqueConstraintError);
      expect(prismaError.statusCode).toBe(409);
    });

    it("should return a ForeignKeyConstraintError for P2003", () => {
      const error = new PrismaClientKnownRequestError("Foreign key constraint failed", {
        code: "P2003",
        clientVersion: "3.0.0",
      });
      const prismaError = PrismaError.fromPrismaError(error);
      expect(prismaError).toBeInstanceOf(ForeignKeyConstraintError);
      expect(prismaError.statusCode).toBe(400);
    });

    it("should return a RecordNotFoundError for P2025", () => {
      const error = new PrismaClientKnownRequestError("Record not found", {
        code: "P2025",
        clientVersion: "3.0.0",
      });
      const prismaError = PrismaError.fromPrismaError(error);
      expect(prismaError).toBeInstanceOf(RecordNotFoundError);
      expect(prismaError.statusCode).toBe(404);
    });

    it("should return a ValidationError for PrismaClientValidationError", () => {
      const error = new PrismaClientValidationError("Validation error", { clientVersion: "3.0.0" });
      const prismaError = PrismaError.fromPrismaError(error);
      expect(prismaError).toBeInstanceOf(ValidationError);
      expect(prismaError.statusCode).toBe(400);
    });

    it("should return a DatabasePanicError for PrismaClientRustPanicError", () => {
      const error = new PrismaClientRustPanicError("Database panic error", "3.0.0");
      const prismaError = PrismaError.fromPrismaError(error);
      expect(prismaError).toBeInstanceOf(DatabasePanicError);
      expect(prismaError.statusCode).toBe(500);
    });

    it("should return a DatabaseInitializationError for PrismaClientInitializationError", () => {
      const error = new PrismaClientInitializationError("Database initialization error", "3.0.0");
      const prismaError = PrismaError.fromPrismaError(error);
      expect(prismaError).toBeInstanceOf(DatabaseInitializationError);
      expect(prismaError.statusCode).toBe(500);
    });

    it("should return an UnknownDatabaseError for PrismaClientUnknownRequestError", () => {
      const error = new PrismaClientUnknownRequestError("Unknown database error", { clientVersion: "3.0.0" });
      const prismaError = PrismaError.fromPrismaError(error);
      expect(prismaError).toBeInstanceOf(UnknownDatabaseError);
      expect(prismaError.statusCode).toBe(500);
    });

    it("should return a GenericDatabaseError for unknown errors", () => {
      const error = new Error("Some random error");
      const prismaError = PrismaError.fromPrismaError(error);
      expect(prismaError).toBeInstanceOf(GenericDatabaseError);
      expect(prismaError.statusCode).toBe(500);
    });
  });
});
