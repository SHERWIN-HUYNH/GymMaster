import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const config = {
    runtime: 'edge',
}

const app = new Hono().basePath('/api')

app.get('/sign-in', (c) => {
  return c.json({
    message: 'SIGN IN SUCCESSFULLY',
  })
})

export default handle(app)