# ETIMS 2027

**1st National Conference on Emerging Technologies, Innovation and Multidisciplinary Studies**

Hosted by Netaji Subhas Institute of Technology (NSIT), Bihta, Patna.  
📅 23–24 July 2027

---

## Project Overview

Full-stack conference website built with:

| Layer    | Stack                                       |
|----------|---------------------------------------------|
| Frontend | React 18, Vite, TypeScript, Tailwind CSS    |
| Backend  | Node.js, Express, TypeScript                |
| Database | PostgreSQL, Prisma ORM                      |
| Auth     | JWT-based admin authentication              |

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm 9+

### 1. Clone and install

```bash
git clone <repo-url> etims-2027
cd etims-2027
```

### 2. Backend setup

```bash
cd server
cp .env.example .env
# Edit .env with your database credentials
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

The API server starts at `http://localhost:5000`.

### 3. Frontend setup

```bash
cd client
cp .env.example .env
npm install
npm run dev
```

The client starts at `http://localhost:5173`.

### 4. Verify

- Frontend: http://localhost:5173
- API health: http://localhost:5000/api/health

## Project Structure

```
etims-2027/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route pages
│   │   ├── sections/     # Page sections
│   │   ├── hooks/        # Custom hooks
│   │   ├── services/     # API service layer
│   │   ├── types/        # TypeScript types
│   │   └── utils/        # Utilities and constants
│   └── public/
├── server/          # Express backend
│   ├── src/
│   │   ├── config/       # App and DB config
│   │   ├── controllers/  # Route handlers
│   │   ├── middleware/    # Express middleware
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   ├── validators/   # Zod schemas
│   │   └── utils/        # Shared utilities
│   └── prisma/           # Database schema
├── docs/            # Documentation
└── README.md
```

## API Endpoints

| Method | Path          | Description       |
|--------|---------------|-------------------|
| GET    | /api/health   | Health check      |

> More endpoints will be added as features are implemented.

## Environment Variables

See `.env.example` files in both `client/` and `server/` directories.

## License

All rights reserved. ETIMS 2027, NSIT Bihta, Patna.
