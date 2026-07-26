import { Hono } from 'hono'

const survey = new Hono()

survey.post('/', (c) => c.json({ error: 'not implemented' }, 500))

export default survey
