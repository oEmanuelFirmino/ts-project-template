import { Router } from "express";
import { healthCheck } from "../controllers/healthCheck.controller";

export const router = Router();

router.get("/health", healthCheck);
