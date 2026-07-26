create table topics (
  id text primary key,
  name text not null,
  description text not null
);

create table booth_questions (
  id text primary key,
  category text not null,
  format text not null,
  content jsonb not null,
  is_hoax boolean,
  explanation text not null
);

create table scenarios (
  id text primary key,
  topic text not null references topics(id),
  title text not null,
  thumbnail_url text,
  data jsonb not null
);

create table survey_responses (
  id uuid primary key default gen_random_uuid(),
  session_id text not null,
  responses jsonb not null,
  submitted_at timestamptz not null default now()
);

alter table booth_questions enable row level security;
alter table scenarios enable row level security;
alter table topics enable row level security;
alter table survey_responses enable row level security;

create policy "public read" on booth_questions for select using (true);
create policy "public read" on scenarios for select using (true);
create policy "public read" on topics for select using (true);

create policy "public insert only" on survey_responses for insert with check (true);
