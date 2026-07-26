import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors({
  origin: process.env.ALLOWED_ORIGIN || '*',
}))

app.get('/', (c) => c.text('Spot-It API'))

export default app
