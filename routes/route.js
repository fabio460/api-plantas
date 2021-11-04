
const route = require('express').Router();
const controller_planta = require('../controllers/controller_planta')
const controller_auth = require('../controllers/controller_auth')
const controller_usuario = require('../controllers/controller_usuario');
const multer = require('multer');
const multer_config =require('../multer_config');
const jwt = require('jsonwebtoken');
const config_token = require('../controllers/controller_auth')

route.get('/',(req,res)=>{
   res.send(__dirname,'..','home.html')
})
//produto
route.get('/listar',controller_planta.get)
route.post('/postar',multer(multer_config).single(),controller_planta.post)
route.delete('/deletar/:id',controller_planta.delete);
route.put('/atualizar/:id',controller_planta.update)
//usuario
route.post('/token',multer(multer_config).single(),controller_auth.gerar_jwt)
route.get('/auth',controller_auth.config,controller_auth.validar);
route.post('/deslogar',controller_auth.deslogar)
route.post('/cadastrarUsuario',multer(multer_config).single(),controller_usuario.cadastrar);
route.get('/listarUsuario',controller_usuario.listarUsuario);
route.get('/listarusuariopelonome/:email',controller_usuario.listarUsuarioPorNome)
module.exports = route;