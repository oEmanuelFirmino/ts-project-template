import { Request, Response, NextFunction } from "express";

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const { method, url } = req;
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${method} ${url} - ${res.statusCode} - ${duration}ms`);
  });

  next();
};
