const express = require('express')
const route = require('./route')
const server = express()
const path = require('path')

server.set('view engine', 'ejs')

server.use(express.static('public'))

server.set('views', path.join(__dirname, 'views'))
/* dirname pega o nome do diretório pai, no caso daqui é o src */

server.use(express.urlencoded({ extended: true }))

server.use(route)
server.listen(process.env.PORT || 3000, () => {
  console.log('RODANDO')
})
