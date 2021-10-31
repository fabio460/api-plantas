const mongoose = require('mongoose');

const schema = mongoose.Schema({
    titulo:String,
    imagem:String,
    descricao:String,
    preco:String
})
const  model_plantas = mongoose.model("planta",schema)

module.exports =model_plantas;