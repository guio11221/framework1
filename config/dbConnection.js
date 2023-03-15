const { dataMysql } = require('./config');
const mysql = require('mysql');

const connMySQL =  () => {
  
 var  connection =  mysql.createConnection({
    host: dataMysql.host,
    user: dataMysql.user,
    password: dataMysql.password,
    database: dataMysql.database
  })

  connection.connect((err) => {
    if(err){ console.log }

    console.log(`Conectado com o Banco de dados`)
  })

  return connection
};


module.exports =  connMySQL 

