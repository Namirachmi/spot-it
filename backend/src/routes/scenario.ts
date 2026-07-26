import { Hono } from 'hono'

const scenario = new Hono()

scenario.get('/:scenarioId', (c) => c.json({ error: 'not implemented' }, 500))

export default scenario
