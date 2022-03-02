const express = require('express')

const QuestionController = require('./controllers/QuestionController')

const RoomController = require('./controllers/RoomController')

const route = express.Router()

/* rota para entrar na sala */
route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))

/* Rota para criar uma senha */
route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
)

/* Rota para criar uma sala */
route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)

/* Rota para controlar perguntas */
route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/enterroom', RoomController.enter)

module.exports = route

// Formato que o formulário da modal deve passar a informação:
// (link/sala/questão/ação)
//  os ":" servem para dizer que não sabemos qual o elemento virá, então "declaramos" uma variavel
//  route.post('/room/:room/:question/:action')
// route.post('/room/create-room', RoomController.creat)
