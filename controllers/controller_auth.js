const jwt = require('jsonwebtoken');
const usuario = require('../models/model_usuario')


exports.gerar_jwt =async (req,res)=>{

  //  const queryUsuario = await usuario.find();
   // queryUsuario.find( (item)=>{
     //   if(req.body.email === item.email && req.body.senha === item.senha){
       //   const token = jwt.sign({usuario:req.body.usuario},'my-secret-key',{expiresIn:300})
        //  res.json({usuario:item.nome,token:token});
          
       // }
    //})
    
   //return res.status(401).send({erro:"não encontrado"})
    
   const {email,senha} = req.body;
   const user =await usuario.findOne({
     email,
     senha
   })

   if(!user){
     res.send('usuario não encontrado')
   }else{
     return res.json({
       token : jwt.sign({usuario:req.body.usuario},'my-secret-key',{expiresIn:300}),
       usuario:user.nome
     })
   }
   
}


  exports.validar = (req,res)=>{
      res.send('usuario logado')
  }
  
  exports.config = (req,res,next)=>{
    const token = req.headers['x-access-token'];
    
    blackList.findIndex((item)=>{
        if(item === token) res.status(401).end()
    })

    jwt.verify(token,'my-secret-key',(err,decodId)=>{
        if(err) res.status(401).end();
        req.id = decodId.id
        next()
    })
  } 

  const blackList = [];
  exports.deslogar = (req,res)=>{
      const token = req.headers['x-access-token']
      blackList.push(token)
      console.log(blackList)
      res.send('usuario deslogado').end()
  }

  