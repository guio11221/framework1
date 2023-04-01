const app = require("./config/server.js"); // importando a configuração do express.
const { dataExpress } = require("./config/config"); // Algumas variaveis que eu posso usar em todo o codigo



// iniciando o servidor na porta que foi definida..!!
app.listen(dataExpress.PORT, () =>
    console.log(`Servidor rodando na porta ${dataExpress.PORT}`)
);