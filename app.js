const app = require("./config/server.js"); // importando a configuração do express.
const PORT = 3000

/**

    @author {Music} Me fala ai se vale a pena :( 



 */



// iniciando o servidor na porta que foi definida..!!
app.listen(PORT, () => console.log(`Servidor rodando na porta %d`, PORT));