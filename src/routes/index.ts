import express from "express";
import { healthRoutes } from "./health.routes";
import { metricsRoutes } from "./metrics.routes";

export function configureRoutes(app: express.Application) {
  metricsRoutes(app);
  healthRoutes(app);
}