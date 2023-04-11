const mysql = require("mysql"); // importando o modulo do myysql.

const connMySQL = () => {
  // criando a conexão com o banco de dados.
  var connection = mysql.createConnection({
    host: "localhost", // local que o banco esta, no caso é local "Na nossa máquina"
    user: "root", // user
    password: "ifms", // Senha do banco 
    database: "portal_noticias", // nome do banco que esta as tabelas..!!
  });

  // verifiicando a conexão com o banco de dados
  connection.connect((err) => {
    // verificando a connection com o banco de dados.
    if (err) { return console.log(err) } // se tiver error, mostra no console.

    return console.log(`Conectado com o Banco de dados`); // se ocorrer tudo bem, mostra essa mensagem no console.
  });

  return connection; // retornando a connection
};

module.exports = () => {
  return connMySQL;
}; // exportando a conection com o banco de dados
