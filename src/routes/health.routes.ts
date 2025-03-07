import express from "express";
import { healthCheck } from "../controllers/healthCheck.controller";

export function healthRoutes(router: express.Application) {
  router.get("/health", healthCheck)
}