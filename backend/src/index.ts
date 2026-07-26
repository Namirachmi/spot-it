import { Hono } from 'hono'
import { cors } from 'hono/cors'

import booth from './routes/booth.js'
import scenario from './routes/scenario.js'
import scenarios from './routes/scenarios.js'
import topics from './routes/topics.js'
import survey from './routes/survey.js'

const app = new Hono()

app.use('/api/*', cors({
  origin: process.env.ALLOWED_ORIGIN || '*',
}))

app.route('/api/booth', booth)
app.route('/api/scenario', scenario)
app.route('/api/scenarios', scenarios)
app.route('/api/topics', topics)
app.route('/api/survey', survey)

app.get('/', (c) => c.text('Spot-It API'))

export default app
