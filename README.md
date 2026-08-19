# Spot-It

Media & Information Literacy (MIL) project for the **UNESCO Youth Hackathon 2026**.

> Live demo: https://spot-it-beta.vercel.app

Spot-It combines two connected experiences to help people spot misinformation — hoaxes — before they share it:

1. **Offline photobooth** — visitors take a short 5-question MIL quiz before posing for a photo.
2. **Online interactive website** — interactive scenarios where users make decisions in real-life misinformation situations and learn from the outcomes.

## Topics

| Topic | Description |
|---|---|
| Breaking News | Viral news that spreads before anyone verifies it |
| AI or Real? | Photos or videos — authentic, or AI-generated? |
| Health Hoax | Health claims that sound convincing but are wrong |
| Emergency Alert | Emergency or disaster info that may not be official |

## Features

- Photobooth quiz: 5 questions, one per category (`health`, `ai_media`, `fake_quote`, `clickbait`, `emergency`) — truth/false and swipe formats
- Interactive scenario website: each topic has 3 decision-based scenarios with safe / neutral / risky endings
- Per-topic result screens: score reveal with per-question tracking (AI or Real?), Debunked Session (Health Hoax), Reflection + MIL Tips (Breaking News)
- Reflective survey at the end of a website session, used as evidence for the hackathon success metric
- Backend as the source of truth for quiz/scenario content, with a silent static fallback so the frontend never breaks

## Tech stack

**Frontend** (`frontend/`)

- React 19 + Vite 8
- React Router 7
- Framer Motion

**Backend** (`backend/`)

- Hono (TypeScript)
- Supabase / Postgres
- Zod + @hono/zod-validator
- Deployed to Vercel

## Repository structure

```
spot-it/
├── frontend/          React + Vite website (photobooth quiz + scenarios)
│   └── src/
│       ├── app.jsx        (routes)
│       └── Components/    (home, header, quiz, stackingCards, openingIntro)
├── backend/           Hono API (Vercel serverless)
│   ├── src/
│   │   ├── index.ts       (Hono app, CORS, route mounting)
│   │   ├── routes/        (booth, topics, scenarios, scenario, survey)
│   │   ├── lib/           (supabase client, scoring logic)
│   │   └── types/         (TypeScript types)
│   ├── api/index.ts       (Vercel entrypoint)
│   └── supabase/          (schema.sql + seed.ts)
└── README.md
```

## Getting started

### Backend

```bash
cd backend
npm install
cp .env.local.example .env.local   # fill in Supabase URL + keys
vercel dev                          # serves http://localhost:3000
```

1. Run `supabase/schema.sql` once in the Supabase SQL Editor (manual, never auto-run).
2. Seed the data (uses the service role key — local only):

```bash
npm run seed
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env   # set VITE_API_URL to your backend URL
npm run dev            # serves http://localhost:5173
```

## API endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/booth/questions` | 5 random questions (1 per category), answer key stripped |
| POST | `/api/booth/submit` | Submit answers → `{ score, level, weak_categories, notes }` |
| GET | `/api/topics` | List the 4 scenario topics |
| GET | `/api/scenarios/:topicId` | List scenarios in a topic |
| GET | `/api/scenario/:scenarioId` | Full scenario detail (decisions + endings) |
| POST | `/api/survey` | Store a reflective survey response |

Errors follow a `{ "error": "message" }` shape with 400 / 404 / 500 status codes.

## Security notes

- **RLS is ON for all tables.** `booth_questions` / `scenarios` / `topics` allow public read only; `survey_responses` allows public insert only.
- **The anon key is backend-only. Never use it in the frontend/browser.** The `booth_questions` RLS policy exposes the answer key (`is_hoax`, `is_real`, `explanation`) to anyone holding the anon key — all client queries must go through the API, which strips those fields.
- **The service role key is only for local seed scripts** (`npm run seed`). Never set it as an env var on Vercel.

## Deployment

Deploy both folders to Vercel. Required environment variables:

| App | Variable | Description |
|---|---|---|
| backend | `SUPABASE_URL` | Supabase project URL |
| backend | `SUPABASE_ANON_KEY` | Supabase anon/public key |
| backend | `ALLOWED_ORIGIN` | Frontend URL (optional, falls back to `*`) |
| frontend | `VITE_API_URL` | Backend API URL |

**Do NOT set `SUPABASE_SERVICE_ROLE_KEY` in Vercel.**

## Team workflow

- Feature branches only: `{name}/{feature}` (e.g. `bagas/booth-api`).
- Never commit directly to `main`.
- Commit early and often, with `feat:` / `fix:` / `chore:` / `docs:` prefixes.
- Push to the same branch regularly; open a PR when a feature is ready for review.

## Built for

UNESCO Youth Hackathon 2026 — teaching the next generation to spot hoaxes, verify sources, and think before sharing.