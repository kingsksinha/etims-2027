import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { env } from './config/index.js';
import { rateLimiter } from './middleware/rateLimiter.js';
import { errorHandler } from './middleware/errorHandler.js';
import routes from './routes/index.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDistPath = path.resolve(__dirname, '../../client/dist');

// Security & parsing middleware
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

app.use(
  cors({
    origin:
      env.CORS_ORIGIN === '*'
        ? true
        : [env.CORS_ORIGIN, 'http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
  })
);
app.use(express.json({ limit: '10mb' }));

// API routes protected by rate limiter
app.use('/api', rateLimiter, routes);

// Serve frontend SPA in production if client build exists
if (fs.existsSync(clientDistPath)) {
  console.log(`[Static Hosting] Serving client SPA from ${clientDistPath}`);
  app.use(express.static(clientDistPath));

  // SPA fallback for all non-API GET routes
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
}

// Centralized error handler (must be last)
app.use(errorHandler);

// Start server
app.listen(env.PORT, '0.0.0.0', () => {
  console.log(
    `ETIMS 2027 Server running on port ${env.PORT} in ${env.NODE_ENV} mode`
  );
});
