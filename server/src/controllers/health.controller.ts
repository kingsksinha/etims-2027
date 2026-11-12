import type { Request, Response } from 'express';
import { env } from '../config/index.js';

export const getHealth = (_req: Request, res: Response): void => {
  res.json({
    success: true,
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: env.NODE_ENV,
    version: '0.1.0',
  });
};
