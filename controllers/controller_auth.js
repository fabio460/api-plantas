const jwt = require('jsonwebtoken');

exports.gerar_jwt = (req,res)=>{
    const usuarios = [
        {nome:"fabio",senha:"fa"},
        {nome:"ana",senha:"an"},
        {nome:"ruth",senha:"ru"},
    ] 
    usuarios.findIndex((item)=>{
        if(req.body.nome === item.nome && req.body.senha === item.senha){
          const token = jwt.sign({usuario:req.body.usuario},'my-secret-key',{expiresIn:300})
          res.json({usuario:item.nome,token:token})
        }
    })
    res.send('usuario não cadastrado');
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

  