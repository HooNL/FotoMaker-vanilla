const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 2727

// App
const app = express()

// Body Parser 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// UI
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/openai', require('./routes/openaiRoutes'))

// Running Server
app.listen(port, () =>
  console.log(`Server is gestart op port http://localhost:${port}`)
)
