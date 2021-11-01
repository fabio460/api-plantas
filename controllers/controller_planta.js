const model_planta = require('../models/model_plantas');
const connect = require('../conexao');
connect();

exports.get =async (req,res)=>{
  const model =await model_planta.find()
  if(model){
      res.json(model)
  }  

}

exports.post = (req,res)=>{
   model_planta.create({
       titulo:req.body.titulo,
       imagem:req.body.imagem,
       descricao:req.body.descricao,
       preco:req.body.preco
   })
   res.send('produto inserido com sucesso')
}

exports.delete = (req,res)=>{
  model_planta.findByIdAndDelete(req.params.id,(err)=>{
    if(err){
      res.send('erro ao deletar')
    }else{
      res.send('deletado com sucesso')
    }
  })
}
