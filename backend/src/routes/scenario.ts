import { Hono } from 'hono'
import { supabase } from '../lib/supabase.js'

const scenario = new Hono()

scenario.get('/:scenarioId', async (c) => {
  const { scenarioId } = c.req.param()

  const { data, error } = await supabase
    .from('scenarios')
    .select('*')
    .eq('id', scenarioId)
    .single()

  if (error || !data) {
    return c.json({ error: 'Scenario not found' }, 404)
  }

  return c.json(data)
})

export default scenario
