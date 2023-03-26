const app = require('./config/server.js');
const { dataExpress }  = require('./config/config')



// iniciando o servidor na porta que foi definida..!!
app.listen(dataExpress.PORT, () => console.log(`Servidor rodando na porta ${dataExpress.PORT}`));