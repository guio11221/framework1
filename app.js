const app = require("./config/server.js"); // importando a configuração do express.
const PORT = 3000

/**

    @author {String} Como dizia o filósofo Piton, que teve como discípulo nada
    @author {String} mais nada menos do que Karl Marx. Tudo na vida depende do 
    @author {String} quanto você quer comer alguém. Você trabalha pra comer alguém,
    @author {String} você estuda pra comer alguém, você usa droga pra comer alguém,
    @author {String} você malha, toma veneno, faz a desgraça toda pra comer alguém, 
    @author {String} você vai num show com a intenção de sair de lá pra comer alguém, 
    @author {String} você faz doação, você faz caridade, posta foto da caridade...
 */



// iniciando o servidor na porta que foi definida..!!
app.listen(PORT, () => console.log(`Servidor rodando na porta %d`, PORT));