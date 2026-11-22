# ETIMS 2027 — Official Conference Portal

**1st National Conference on Emerging Technologies, Innovation and Multidisciplinary Studies**  
**Host Institution:** Netaji Subhas Institute of Technology (NSIT), Amhara, Bihta, Patna, Bihar  
**Dates:** 23–24 July 2027 · Physical Mode · 9.2-Acre Residential Campus  
**Institutional Accreditations:** Approved by AICTE & DST Bihar · Affiliated with BEU & SBTE  
**Conference Convenor:** Dr. Atif Hussain (Assistant Professor, Department of Civil Engineering)  
**Live Production URL:** [https://etims-2027.vercel.app](https://etims-2027.vercel.app)

---

## ⚡ Quick Start (Run Locally in 60 Seconds)

### Prerequisites
- **Node.js:** v18.0.0 or higher (v20+ recommended)
- **npm:** v9.0.0 or higher

### Option 1: One-Command Start from Project Root (Recommended)

1. **Install dependencies:**
   ```bash
   npm install
   ```
   *(This automatically triggers `postinstall` to configure all client dependencies).*

2. **Start the local development server:**
   ```bash
   npm run dev
   ```

3. **Open in your browser:**  
   👉 **`http://localhost:5173`**

---

### Option 2: Direct Frontend Start

```bash
cd client
npm install
npm run dev
```

---

### Option 3: Production Build & Local Preview

```bash
# Build the production bundle
npm run build

# Preview the production build locally
npm run preview
```
Visit `http://localhost:4173` to test the minified edge production build.

---

## 📑 Offline Standalone Presentations & Blueprints (Zero Server Required)

This repository includes two standalone, interactive executive presentations that can be **double-clicked directly** in any modern web browser without running Node.js or any local server:

1. **`presentation.html`** (Executive Presentation Deck):
   - 10 structured executive briefing slides designed for institutional leadership and committee review.
   - Interactive keyboard navigation (`←`/`→`/`Space`), Fullscreen (`F`), and Speaker Talking Points (`N`).
   - One-click print / export to landscape PDF deck (`P`).
   - *Online access:* [https://etims-2027.vercel.app/presentation.html](https://etims-2027.vercel.app/presentation.html)

2. **`etims-conference-workflow.html`** (Operational Architecture & Workflow Engine):
   - Master Cross-Functional Swimlane diagram across Author, Convenor, Reviewers, and Accounts.
   - Deep dive into the 6-stage double-blind peer-review lifecycle.
   - Delegate registration & UTR payment verification flow.
   - Step-by-step setup checklist for Microsoft CMT, domain DNS, and secretariat mailbox.
   - Live interactive process simulation sandbox with real-time event logs.

---

## 🏛️ Verified Conference Credentials & Official Scope

- **Theme:** SCIENCE · ENGINEERING · MANAGEMENT · HUMANITIES
- **8 Multidisciplinary Tracks:**
  - `T1`: Computer Science and Artificial Intelligence
  - `T2`: Civil Engineering and Infrastructure
  - `T3`: Electrical Engineering
  - `T4`: Mechanical and Manufacturing Engineering
  - `T5`: Electronics and Communication Engineering
  - `T6`: Applied Science
  - `T7`: Management Studies
  - `T8`: Humanities and Library Science
- **5 Registration Categories (INR):**
  - Faculty / Academicians: ₹ 2,500 (Early by 20 June 2027) / ₹ 3,000 (Regular by 10 July 2027)
  - Industry Professionals: ₹ 3,500 (Early) / ₹ 4,000 (Regular)
  - Research Scholars / PG: ₹ 1,500 (Early) / ₹ 2,000 (Regular)
  - UG Students: ₹ 800 (Early) / ₹ 1,000 (Regular)
  - Non-presenting Attendee / Co-author: ₹ 500 (Flat)
- **Organising Leadership:** 100% faithful to the official brochure (16 verified dignitaries including Chief Patron Mr. M. M. Singh, Patron Mrs. Nitu Singh, Director Dr. Jyotirmayee Dalei, Convenor Dr. Atif Hussain, 5 Co-Convenors, and 7 Advisory Board members from IIT Patna, NIT Surathkal, GEC Munger, and GEC Bhojpur).

---

## 📂 Project Structure

```
etims-2027/
├── presentation.html              # Standalone 10-slide executive presentation
├── etims-conference-workflow.html # Standalone operational workflow blueprint & simulator
├── package.json                   # Root orchestrator (scripts: dev, build, preview)
├── vercel.json                    # Edge routing and SPA redirect configuration
├── README.md                      # Complete evaluation & run instructions
│
├── client/                        # React 19 + TypeScript + Tailwind CSS Frontend
│   ├── index.html                 # HTML entry point with metadata & preconnects
│   ├── package.json               # Client dependencies (Vite, Framer Motion, Lucide)
│   ├── vite.config.ts             # Vite configuration with Tailwind CSS v4
│   ├── public/
│   │   ├── NSIT_Conference_Brochure_Final.pdf # Official 8.4 MB Brochure PDF
│   │   ├── presentation.html      # Public edge presentation deck
│   │   └── assets/                # Verified NSIT campus & committee assets
│   │       ├── committee/         # Real dignitary portraits from brochure
│   │       ├── tracks/            # High-resolution track thematic photography
│   │       ├── nsit-building-real.jpg  # Verified main campus photography
│   │       └── nsit-auditorium-real.jpg # Verified plenary hall photography
│   └── src/
│       ├── components/            # Reusable components & modals
│       │   ├── modals/            # DelegateRegistrationModal & PaperSubmissionModal
│       │   ├── common/            # Container, SectionHeading, Header, Footer
│       │   └── ui/                # Campus showcase & transit directory
│       ├── pages/                 # Full route views
│       │   ├── HomePage.tsx       # Live countdown, summit pillars, spotlight
│       │   ├── AboutPage.tsx      # NSIT 9.2-acre profile & academic legacy
│       │   ├── CommitteesPage.tsx # Verified 16 brochure committee members
│       │   ├── TracksPage.tsx     # 8 tracks with mobile inline accordion dropdowns
│       │   ├── DatesPage.tsx      # Important deadlines & milestones
│       │   ├── SubmissionPage.tsx # Author manuscript guidelines & template specs
│       │   ├── RegistrationPage.tsx # Symmetrical mobile-optimized fee schedule
│       │   ├── VenuePage.tsx      # Bihta campus venue & regional transit corridors
│       │   └── ContactPage.tsx    # Convenor secretariat inquiry dispatch desk
│       └── utils/
│           └── constants.ts       # Central source of truth for all verified data
│
└── server/                        # Express API backend with Prisma ORM
    ├── prisma/                    # PostgreSQL schema definition
    └── src/                       # API routes, controllers, middleware
```

---

## 📬 Contact & Support

**Conference Secretariat Desk:**  
Dr. Atif Hussain, Assistant Professor, Department of Civil Engineering  
Netaji Subhas Institute of Technology (NSIT), Amhara, Bihta, Patna, Bihar – 801106  
📧 Email: [etims2027@nsiterp.in](mailto:etims2027@nsiterp.in)  
📱 Phone: [+91 83402 58426](tel:+918340258426)
