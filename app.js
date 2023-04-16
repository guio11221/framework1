const app = require("./config/server.js"); // importando a configuração do express.
const PORT = 3000

/**
 * @author Guii Santos
 * @description Atividade de frameWork, do IFMS Campus Dourados.
 */



// iniciando o servidor na porta que foi definida..!!
app.listen(PORT, () =>  console.log(`Servidor rodando na porta %d`, PORT));