const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/secund-page', (req, res) => res.render("secund-page"))
route.get('/treepage', (req, res) => res.render("treepage"))
//formato que o formulario da modal tem que passsar acao 
//route.post('/treepage/:treepage/:question/:action',(req, res) => res.render("treepage"))

module.exports = route