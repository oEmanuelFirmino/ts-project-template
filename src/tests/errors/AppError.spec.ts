import { AppError } from "../../errors/AppError";

describe("App Error", () => {
  it("should create an AppError with correct message and status code", () => {
    const error = new AppError("Test Error", 418);
    expect(error.message).toBe("Test Error");
    expect(error.statusCode).toBe(418);
  });
})