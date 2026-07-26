import { Hono } from 'hono'

const topics = new Hono()

topics.get('/', (c) => c.json({ error: 'not implemented' }, 500))

export default topics
