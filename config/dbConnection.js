const mysql = require("mysql"); // importando o modulo do myysql.
const { dataMysql } = require("./config"); // importando as config do mysql.

const connMySQL = () => {
  // criando a conexão com o banco de dados.
  var connection = mysql.createConnection({
    host: dataMysql.host,
    user: dataMysql.user,
    password: dataMysql.password,
    database: dataMysql.database,
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
