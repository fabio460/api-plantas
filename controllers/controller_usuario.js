const usuario = require('../models/model_usuario');
const conexao = require('../conexao');
conexao();
exports.cadastrar = (req,res)=>{
    usuario.create({
        nome:req.body.nome,
        email:req.body.email,
        senha:req.body.senha
    })
    res.send('usuario cadastrado com sucesso');
}
exports.listarUsuario = async(req,res)=>{
  const u =await usuario.find();
  res.json(u);
}

exports.listarUsuarioPorNome = async(req,res)=>{
  const u =await usuario.findOne({email:req.params.email});
  if(!u){
     res.send('não encontrado');
  }
  else{
    return res.json({email:u.email});
  }
}