import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { supabase } from '../lib/supabase.js'

const survey = new Hono()

const responseItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
})

const surveySchema = z.object({
  session_id: z.string().min(1),
  responses: z.array(responseItemSchema).min(1),
})

survey.post('/', zValidator('json', surveySchema), async (c) => {
  const body = c.req.valid('json')

  const { error } = await supabase.from('survey_responses').insert({
    session_id: body.session_id,
    responses: body.responses,
  })

  if (error) {
    return c.json({ error: 'Failed to save survey response' }, 500)
  }

  return c.json({ success: true }, 201)
})

export default survey
