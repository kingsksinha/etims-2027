# ========================================================
# ETIMS 2027 — Multi-Stage Production Dockerfile
# ========================================================

# ----------------- Stage 1: Build Client -----------------
FROM node:20-alpine AS client-builder
WORKDIR /app/client

COPY client/package*.json ./
RUN npm ci

COPY client/ ./
RUN npm run build

# ----------------- Stage 2: Build Server -----------------
FROM node:20-alpine AS server-builder
WORKDIR /app/server

COPY server/package*.json ./
RUN npm ci

COPY server/prisma ./prisma
RUN npx prisma generate

COPY server/ ./
RUN npm run build

# ----------------- Stage 3: Production Runner ------------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000

# Install production dependencies for server only
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm ci --omit=dev

# Copy generated Prisma client from builder
COPY --from=server-builder /app/server/node_modules/.prisma ./node_modules/.prisma
COPY --from=server-builder /app/server/node_modules/@prisma ./node_modules/@prisma
COPY --from=server-builder /app/server/prisma ./prisma

# Copy compiled server dist
COPY --from=server-builder /app/server/dist ./dist

# Copy compiled client dist for Express static serving
COPY --from=client-builder /app/client/dist /app/client/dist

WORKDIR /app
EXPOSE 5000

# Run Express server
CMD ["node", "server/dist/index.js"]
