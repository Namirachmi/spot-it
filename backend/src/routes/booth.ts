import { Hono } from 'hono'
import { supabase } from '../lib/supabase.js'
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

booth.post('/submit', (c) => c.json({ error: 'not implemented' }, 500))

export default booth
