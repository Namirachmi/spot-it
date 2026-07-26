import { Hono } from 'hono'

const booth = new Hono()

booth.get('/questions', (c) => c.json({ error: 'not implemented' }, 500))
booth.post('/submit', (c) => c.json({ error: 'not implemented' }, 500))

export default booth
