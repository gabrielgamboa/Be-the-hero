//armazena as rotas da aplicação
const express = require('express')

const OngController = require('./controlers/OngController')
const IncidentController = require('./controlers/IncidentController')
const ProfileController = require('./controlers/ProfileController')
const SessionController = require('./controlers/SessionController')




const routes = express.Router() //Desacoplando as rotas do express em uma nova variável

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index) 
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;