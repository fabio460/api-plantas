const mongoose = require('mongoose');
const schema = mongoose.Schema({
    nome:String,
    email:String,
    senha:String
})
const modelUsuario = mongoose.model('usuarioPlanta',schema);

module.exports=modelUsuario;