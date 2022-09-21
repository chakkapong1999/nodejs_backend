const express = require('express')
const { SERVICE } = require('./common/constants.js')
const routes = require('./routes/index.js')

const app = express()
const PORT = 5000

app.use(express.json())

app.use(SERVICE, routes.tranRouter)

app.get('/api/test', (req, res) => {
  res.json({
    message: 'You Are Connected.'
  })
})

app.listen(PORT, () => {
  console.log(`Server is Running on PORT:${PORT}`)
})
