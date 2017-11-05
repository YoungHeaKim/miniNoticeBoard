require('dotenv').config()

const http = require('http')
const express = require('express')

const authRouter = require('./router/auth')

const app = express()
const server = http.Server(app)

const PORT = process.env.PORT || 3000

app.set('trust proxy')

app.use('/', authRouter)
app.use('/test', function(req, res) { return res.send({ alive: true }) })

server.listen(PORT, () => {
  console.log(`Able to connect to ${PORT}`)
})

module.exports = server