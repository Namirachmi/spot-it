import { Hono } from 'hono'
import { supabase } from '../lib/supabase.js'

const topics = new Hono()

topics.get('/', async (c) => {
  const { data, error } = await supabase.from('topics').select('*')

  if (error) {
    return c.json({ error: 'Failed to fetch topics' }, 500)
  }

  return c.json(data)
})

export default topics
