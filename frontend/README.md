# Spot-It Frontend

MIL (Media & Information Literacy) website — UNESCO Youth Hackathon 2026.

React + Vite frontend for the Spot-It experience: a photobooth quiz and
interactive misinformation scenarios.

## Tech stack

- React 19 + Vite 8
- React Router 7
- Framer Motion

## Setup

```bash
npm install
cp .env.example .env   # set VITE_API_URL to your backend URL
npm run dev
```

`VITE_API_URL` points to the Spot-It backend (e.g. `http://localhost:3000` locally,
or the Vercel-deployed API URL in production).

## Routes

| Route | Screen |
|---|---|
| `/` | Home |
| `/start` | Start |
| `/introduction` | Introduction |
| `/readyornot` | Ready or Not |
| `/quizbreakingnews` | Breaking News scenario quiz |
| `/quizai` | AI or Real? quiz (5 questions) |
| `/endingsafe` | Good ending (teal) |
| `/endingneutral` | Neutral ending (orange) |
| `/endingrisky` | Bad ending (pink) |

## How scenarios are loaded

The quiz templates fetch scenarios from the backend API via the `useScenario`
hook (`Components/quiz/useScenario.js`): the topic listing first, then the full
scenario detail. The last decision of each scenario maps its `ending_type`
(`safe` / `neutral` / `risky`) to an ending route.

If the API is unreachable or errors, the quiz silently falls back to the static
data in `Components/quiz/quizData.js` — the user never sees a loading or error
state.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run preview` | Preview the production build locally |