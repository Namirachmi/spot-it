import { Hono } from 'hono'

const scenarios = new Hono()

scenarios.get('/:topicId', (c) => c.json({ error: 'not implemented' }, 500))

export default scenarios
