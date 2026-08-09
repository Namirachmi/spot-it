import { Hono } from 'hono'
import { supabase } from '../lib/supabase.js'

const scenarios = new Hono()

scenarios.get('/:topicId', async (c) => {
  const { topicId } = c.req.param()

  const { data, error } = await supabase
    .from('scenarios')
    .select('id, title, thumbnail_url')
    .eq('topic', topicId)

  if (error) {
    return c.json({ error: 'Failed to fetch scenarios' }, 500)
  }

  return c.json(data)
})

export default scenarios
