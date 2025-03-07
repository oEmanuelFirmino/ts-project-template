import { EmailAlreadyExistsError, InvalidPasswordError, UnauthorizedUserError, UserError, UserNotFoundError } from "../../errors/UserErrors"

describe("User Errors", () => {
  it("sould create an UnauthorizedError with default message and status code 401", () => {
    const error = new UnauthorizedUserError();
    expect(error.message).toBe("Unauthorized user");
    expect(error.statusCode).toBe(403);
  });

  it("should create an EmailAlreadyExistsError with default message and status code 409", () => {
    const error = new EmailAlreadyExistsError();
    expect(error.message).toBe("Email already exists");
    expect(error.statusCode).toBe(409);
  });

  it("should create an InvalidPasswordError with default message and status code 401", () => {
    const error = new InvalidPasswordError();
    expect(error.message).toBe("Invalid password");
    expect(error.statusCode).toBe(401);
  });

  it("should create a UserNotFoundError with default message and status code 404", () => {
    const error = new UserNotFoundError();
    expect(error.message).toBe("User not found");
    expect(error.statusCode).toBe(404);
  });

  it("should create a UserError with default message and status code 500", () => {
    const error = new UserError("Test User Error", 500);
    expect(error.message).toBe("Test User Error");
    expect(error.statusCode).toBe(500);
  });
});