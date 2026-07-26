# Spot-It Backend

MIL (Media & Information Literacy) backend — UNESCO Youth Hackathon 2026.

## Prerequisites

- Node.js 24.x
- Vercel CLI (`npm i -g vercel`)
- Supabase project (URL + keys)

## Local development

```bash
npm install
vercel dev
```

Open http://localhost:3000

## Seed data

Isi `.env.local` dengan `SUPABASE_URL`, `SUPABASE_ANON_KEY`, dan `SUPABASE_SERVICE_ROLE_KEY`, lalu:

```bash
npm run seed
```

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
