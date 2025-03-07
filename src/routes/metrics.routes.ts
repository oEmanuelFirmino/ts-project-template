import express, { Request, Response } from "express";
import promClient from 'prom-client';


const register = new promClient.Registry();
promClient.collectDefaultMetrics({ register });

export const httpRequestsTotal = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests made',
  labelNames: ['method', 'statusCode'],
});

export function metricsRoutes(router: express.Application) {
  router.get('/metrics', async (req: Request, res: Response) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  });
}