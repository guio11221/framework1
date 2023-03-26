const app = require('./config/server.js');
const { dataExpress }  = require('./config/config')

/**
 * 
 * @author Guii Santos :)  
 */


// Configuração da porta do servidor
app.listen(dataExpress.PORT, () => console.log("Servidor rodando na porta " + dataExpress.PORT));
