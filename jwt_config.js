const jwt = require('jsonwebtoken');
module.exports = function jwt_config(req,res,next){
    const token = req.headers['x-access-token']

    jwt.verify(token,'my-secret-key',(err,decodId)=>{
        if(err) res.status(401).end();
        req.id=decodId.id
        next()
    })
}