import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { supabase } from '../lib/supabase.js'
import { scoreAnswers } from '../lib/scoring.js'
import type { BoothCategory } from '../types/index.js'

const booth = new Hono()

booth.get('/questions', async (c) => {
  const { data, error } = await supabase.from('booth_questions').select('*')

  if (error || !data) {
    return c.json({ error: 'Failed to fetch questions' }, 500)
  }

  const categories = [...new Set(data.map((q: any) => q.category as BoothCategory))]

  const selected: any[] = []
  for (const cat of categories) {
    const pool = data.filter((q: any) => q.category === cat)
    const pick = pool[Math.floor(Math.random() * pool.length)]
    if (pick) selected.push(pick)
  }

  const result = selected.map((q: any) => {
    if (q.format === 'truth_false') {
      return { id: q.id, category: q.category, format: 'truth_false' as const, claim: q.content.claim }
    }
    return {
      id: q.id,
      category: q.category,
      format: 'swipe' as const,
      options: q.content.options.map((o: any) => ({ id: o.id, image_url: o.image_url })),
    }
  })

  return c.json(result)
})

const answerSchema = z.object({
  question_id: z.string().min(1),
  answer: z.union([z.boolean(), z.enum(['left', 'right'])]),
})

const submitSchema = z.object({
  answers: z.array(answerSchema).min(5).max(5),
})

booth.post('/submit', zValidator('json', submitSchema), async (c) => {
  const { answers } = c.req.valid('json')

  const ids = answers.map((a) => a.question_id)
  const { data: questions, error } = await supabase
    .from('booth_questions')
    .select('*')
    .in('id', ids)

  if (error || !questions) {
    return c.json({ error: 'Failed to fetch questions' }, 500)
  }

  if (questions.length !== ids.length) {
    return c.json({ error: 'One or more question IDs not found' }, 400)
  }

  for (const ans of answers) {
    const q = questions.find((x: any) => x.id === ans.question_id)
    if (!q) continue
    if (q.format === 'truth_false' && typeof ans.answer !== 'boolean') {
      return c.json({ error: `Question ${q.id} expects a boolean answer` }, 400)
    }
    if (q.format === 'swipe' && typeof ans.answer === 'boolean') {
      return c.json({ error: `Question ${q.id} expects 'left' or 'right' answer` }, 400)
    }
  }

  const parsed = questions.map((q: any) => {
    if (q.format === 'truth_false') {
      return {
        id: q.id,
        category: q.category as BoothCategory,
        format: 'truth_false' as const,
        claim: q.content.claim,
        is_hoax: q.is_hoax,
        explanation: q.explanation,
      }
    }
    return {
      id: q.id,
      category: q.category as BoothCategory,
      format: 'swipe' as const,
      options: q.content.options,
      explanation: q.explanation,
    }
  })

  const result = scoreAnswers(parsed, answers)
  return c.json(result)
})

export default booth
