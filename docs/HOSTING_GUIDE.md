# ETIMS 2027 — Production Hosting & Deployment Guide

This project is fully prepared for multi-environment production deployment. You can host it as a unified full-stack container/service, or split frontend and backend across modern cloud platforms.

---

## Architecture Overview

- **Frontend:** React 19 + TypeScript + Vite + Tailwind CSS (SPA, compiled to `client/dist`)
- **Backend:** Node.js + Express + Prisma ORM (compiled to `server/dist`)
- **Database:** PostgreSQL (optional write fallback: contact inquiries are safely logged even if the database is initially unconfigured)
- **Unified Mode:** Express serves the `/api/*` routes and automatically serves the compiled `client/dist` static SPA for all other routes.

---

## Option 1: 1-Click / Git Deployment (Render or Railway) — Recommended

### On Render (Full-Stack Web Service)
1. Push this repository to GitHub or GitLab.
2. In [Render Dashboard](https://dashboard.render.com/), click **New +** → **Web Service**.
3. Connect your repository.
4. Configure:
   - **Environment:** `Node`
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
5. Under **Environment Variables**, add:
   - `NODE_ENV`: `production`
   - `PORT`: `5000` (or leave default, Render sets `PORT` automatically)
   - `DATABASE_URL`: Your PostgreSQL connection string (from Render Postgres, Supabase, or Neon)
   - `CORS_ORIGIN`: `*` (or your custom domain)
   - `JWT_SECRET`: A secure random string (minimum 32 characters)
6. Click **Deploy Web Service**.

---

## Option 2: Docker / VPS Deployment

### Using Docker Compose (With bundled PostgreSQL)
Run from the repository root:
```bash
docker compose up -d --build
```
This launches:
- `etims2027-web` at `http://localhost:5000`
- `etims2027-db` (PostgreSQL 16) with automated healthchecks and persistent volume storage.

### Using Docker Single Container
```bash
docker build -t etims-2027:latest .
docker run -d -p 5000:5000 \
  -e NODE_ENV=production \
  -e DATABASE_URL="postgresql://..." \
  -e CORS_ORIGIN="*" \
  --name etims2027 etims-2027:latest
```

---

## Option 3: Split Deployment (Vercel Frontend + Render/Railway Backend)

### Frontend on Vercel
1. Import the repository in [Vercel](https://vercel.com/).
2. Set **Root Directory** to `client`.
3. Framework Preset: `Vite`.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Add Environment Variable:
   - `VITE_API_URL`: `https://your-backend-api.onrender.com/api`
7. Click **Deploy**. (The included `client/vercel.json` ensures direct URL routing works without 404s).

### Backend on Render / Railway
1. Set Root Directory to `server`.
2. Build Command: `npm install && npx prisma generate && npm run build`.
3. Start Command: `node dist/index.js`.
4. Set `CORS_ORIGIN`: `https://your-frontend.vercel.app`.

---

## Option 4: Traditional Ubuntu VPS (PM2 + Nginx)

1. Clone repo to `/var/www/etims-2027`:
   ```bash
   cd /var/www/etims-2027
   npm run build:client
   npm run build:server
   ```
2. Start process with PM2:
   ```bash
   pm2 start server/dist/index.js --name "etims2027" --env production
   pm2 save
   pm2 startup
   ```
3. Configure Nginx reverse proxy to `http://127.0.0.1:5000`.

---

## Production Healthcheck Endpoint

Verify deployment anytime by requesting:
```http
GET /api/health
```
Response:
```json
{
  "status": "ok",
  "timestamp": "2026-11-12T...",
  "uptime": 123.45,
  "service": "ETIMS 2027 API"
}
```
