import { Request, Response, NextFunction } from "express";

export const authorizeRoles = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // if (!roles.includes(req.user?.role)) {
    //   return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    // }
    next();
  };
};
