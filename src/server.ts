import express from 'express'

const app = express()

app.get('/health', (_req, res) => {
  res.json({
    status: 'OK',
    timeStamp: new Date().toISOString(),
    service: 'Amalan API',
  })
})

export { app }
export default app
