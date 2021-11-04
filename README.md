Api Restfull usando a linguagem Node.js, o banco de dados é o MongoDb. O codigo foi
organizado com models, controllers e rotas. O sistema permite busca da lista e uma busca
pelo e-mail. Também permite um post de autenticação usando JWT e cadastro de usuários.
Veja abaixo as regras de negócio:
Exibe a lista de produtos: https://api-plantas.vercel.app/listar
Inserir produtos: https://api-plantas.vercel.app/postar
Deletar produtos: https://api-plantas.vercel.app/deletar/id
Listar usuário: https://api-plantas.vercel.app/listarusuario
Listar usuário pelo e-mail: https://api-plantas.vercel.app/listarusuariopelonome/e-mail
Retorna token de acesso, post(email, senha): https://api-plantas.vercel.app/token
