const path = require('path')
const express = require('express')

const fruitRoutes = require('./routes/fruits')
const imageRoutes = require('./routes/image')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/image', imageRoutes)

module.exports = server
