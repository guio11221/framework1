const mysql = require('mysql');
const { dataMysql } = require('./config');


const connMySQL =  () => {
  
  // criando a conexão com o banco de dados
 var  connection =  mysql.createConnection({
    host: dataMysql.host,
    user: dataMysql.user,
    password: dataMysql.password,
    database: dataMysql.database
  })

  // verifiicando a conexão com o banco de dados
  connection.connect((err) => {
    if(err){ return console.log }

    return console.log(`Conectado com o Banco de dados`)
  })

  return connection
};


module.exports =  connMySQL 

