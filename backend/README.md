# Spot-It Backend

MIL (Media & Information Literacy) backend — UNESCO Youth Hackathon 2026.

Hono + TypeScript API backed by Supabase (Postgres), deployed to Vercel. It
powers the photobooth quiz and the interactive scenario website.

## Prerequisites

- Node.js 24.x
- Vercel CLI (`npm i -g vercel`)
- Supabase project (URL + keys)

## Local development

```bash
npm install
cp .env.local.example .env.local   # fill in SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
vercel dev
```

Open http://localhost:3000

## Database setup

1. Run `supabase/schema.sql` once in the Supabase SQL Editor (manual — never auto-run).
2. Seed the data:

```bash
npm run seed
```

The seed script uses `SUPABASE_SERVICE_ROLE_KEY` from `.env.local` and is safe to
re-run (idempotent upsert on `id`).

## API endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/booth/questions` | 5 random questions (1 per category), with `is_hoax`, `is_real`, and `explanation` stripped |
| POST | `/api/booth/submit` | Submit 5 answers → `{ score, level, weak_categories, notes }` |
| GET | `/api/topics` | List the 4 scenario topics |
| GET | `/api/scenarios/:topicId` | List scenarios in a topic |
| GET | `/api/scenario/:scenarioId` | Full scenario detail (`setup`, `decisions`, `ending`) |
| POST | `/api/survey` | Store a reflective survey response |

Errors follow the shape `{ "error": "message" }` with status codes `400` (invalid
input / Zod validation), `404` (resource not found), or `500` (server/database).

## Deploy to Vercel

```bash
vercel deploy
```

### Required environment variables in Vercel dashboard

| Variable | Description |
|---|---|
| `SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_ANON_KEY` | Supabase anon/public key |
| `ALLOWED_ORIGIN` | Frontend URL (optional, fallback `*`) |

**DO NOT set `SUPABASE_SERVICE_ROLE_KEY` in Vercel** — it's only for local seed scripts.

## Security note

`SUPABASE_ANON_KEY` is backend-only. **Never use it in the frontend/browser**: the
`booth_questions` RLS policy allows public SELECT on the full table (including
`is_hoax` / `explanation` / `is_real` — the answer key). All client queries must
go through the backend API, which strips those fields.

## Scenario API — `ending_type` contract

Only the **last** decision of each scenario carries `ending_type` on its options,
one of `'safe' | 'neutral' | 'risky'` (earlier decisions are non-terminal and don't
have it). The frontend can map it directly to an ending route via
`/ending${ending_type}`:

| `ending_type` | Route |
|---|---|
| `safe` | `/endingsafe` |
| `neutral` | `/endingneutral` |
| `risky` | `/endingrisky` |

Example: `GET /api/scenario/breaking-news-01` returns the last decision's options,
each with a valid `ending_type`; `GET /api/scenarios/health_hoax` lists the
`health-hoax-01` scenario.

### `next_decision_id` contract (branching)

Non-terminal options normally advance to the **next** decision in the array. If an
option must skip ahead (or loop back) to a different decision, it carries
`next_decision_id` pointing to the target decision's `id`:

- `decision_1` (True/False) → `True` → `{ "next_decision_id": "decision_2" }`,
  `False` → `{ "next_decision_id": "decision_3" }`
- `decision_3` ("Good call" reveal) → single option `Continue` →
  `{ "next_decision_id": "decision_2" }` (loops back to the red-flag question)

Terminal options are detected purely by the presence of `ending_type` (not by
array position), so a branched flow can end before the last decision.