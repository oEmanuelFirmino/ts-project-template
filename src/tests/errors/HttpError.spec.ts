import { BadRequestError, ForbiddenError, InternalServerError, NotFoundError, UnauthorizedError } from "../../errors/HttpErrors";

describe("Http Errors", () => {
  it("should create a BadRequestError with default message and status code 400", () => {
    const error = new BadRequestError();
    expect(error.message).toBe("Bad Request");
    expect(error.statusCode).toBe(400);
  });

  it("should create an UnauthorizedError with default message and status code 401", () => {
    const error = new UnauthorizedError();
    expect(error.message).toBe("Unauthorized");
    expect(error.statusCode).toBe(401);
  });

  it("should create a ForbiddenError with default message and status code 403", () => {
    const error = new ForbiddenError();
    expect(error.message).toBe("Forbidden");
    expect(error.statusCode).toBe(403);
  });

  it("should create a NotFoundError with default message and status code 404", () => {
    const error = new NotFoundError();
    expect(error.message).toBe("Not Found");
    expect(error.statusCode).toBe(404);
  });

  it("should create an InternalServerError with default message and status code 500", () => {
    const error = new InternalServerError();
    expect(error.message).toBe("Internal Server Error");
    expect(error.statusCode).toBe(500);
  });
});
