const mysql = require("mysql");

// Cria e retorna uma conexão com o banco de dados MySQL
function createConnection(config = {}) {
  const connection = mysql.createConnection({
    host: config.host || "localhost",
    user: config.user || "root",
    password: config.password || "ifms",
    database: config.database || "portal_noticias",
  });

   // verificando a conexão com o banco
  connection.connect((err) => {
    if (err) return console.error(`Erro ao conectar com o banco de dados: ${err}`);

    return console.log("Conexão com o banco de dados estabelecida");
  });

  return connection;
}

module.exports = () => { return createConnection };
