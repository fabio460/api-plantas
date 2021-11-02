
const route = require('express').Router();
const controller_planta = require('../controllers/controller_planta')
const controller_auth = require('../controllers/controller_auth')
const multer = require('multer');
const multer_config =require('../multer_config');
const jwt = require('jsonwebtoken');
const config_token = require('../controllers/controller_auth')
//produto
route.get('/listar',controller_planta.get)
route.post('/postar',multer(multer_config).single(),controller_planta.post)
route.delete('/deletar/:id',controller_planta.delete);
//usuario
route.post('/token',multer(multer_config).single(),controller_auth.gerar_jwt)
route.get('/auth',controller_auth.config,controller_auth.validar);
route.post('/deslogar',controller_auth.deslogar)
module.exports = route;