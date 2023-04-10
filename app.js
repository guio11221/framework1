const app = require("./config/server.js"); // importando a configuração do express.
const PORT = 3000
const HOST = 'localhost'

/**
 * 
 * @param {import("ejs").AsyncClientFunction} 
 * 
 */


// iniciando o servidor na porta que foi definida..!!
app.listen(PORT, () =>  console.log(`Servidor rodando no http://${HOST}:%d/`, PORT));