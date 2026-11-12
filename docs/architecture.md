# Architecture Overview — ETIMS 2027

## System Architecture

```
┌──────────────────┐         ┌──────────────────┐        ┌──────────────┐
│   React Client   │  HTTP   │  Express Server  │  SQL   │  PostgreSQL  │
│   (Vite + TS)    │◄───────►│   (Node.js)      │◄──────►│  (Prisma)    │
│   Port 5173      │  REST   │   Port 5000      │        │  Port 5432   │
└──────────────────┘         └──────────────────┘        └──────────────┘
```

## Frontend Architecture

### Component Hierarchy

- **Layout** — wraps all pages with Navbar + Footer
  - **Pages** — route-level components (HomePage, NotFoundPage, etc.)
    - **Sections** — large page sections (HeroSection, AboutSection)
      - **Common Components** — reusable building blocks (Button, Card, etc.)
      - **UI Components** — domain-specific widgets (CountdownTimer, EventDateCard)

### Design System

| Token       | Value     | Usage                    |
|-------------|-----------|--------------------------|
| Primary     | `#073B3A` | Deep Teal — headings, nav, CTAs |
| Secondary   | `#0D7773` | Teal — secondary elements       |
| Accent      | `#42C7B5` | Mint — highlights, decorations  |
| Background  | `#F4F8F7` | Off-white — page background     |

Typography:
- Headings: Space Grotesk (400–700)
- Body: Inter (300–700)

## Backend Architecture

### Middleware Pipeline

```
Request → Helmet → CORS → JSON Parser → Rate Limiter → Routes → Error Handler → Response
```

### Authentication Flow (planned)

```
Login → Validate credentials → Issue JWT → Client stores token
Authenticated request → Bearer token → auth middleware → Decode → Attach user → Controller
```

## Database Models

| Model            | Purpose                              |
|------------------|--------------------------------------|
| Admin            | Admin user accounts                  |
| Conference       | Conference metadata                  |
| CommitteeMember  | Organizing and advisory committees   |
| ResearchTrack    | Conference research tracks/themes    |
| ImportantDate    | Key dates and deadlines              |
| Registration     | Attendee registrations               |
| PaperSubmission  | Research paper submissions           |
| ContactMessage   | Contact form submissions             |

## Security

- JWT authentication for admin endpoints
- Helmet HTTP headers
- CORS origin restriction
- Rate limiting (100 req/15 min per IP)
- Zod request validation
- Environment-based secrets
- Bcrypt password hashing
