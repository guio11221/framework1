const { dataMysql } = require('./config');
const mysql = require('mysql');

const connMySQL = () => {
  console.log('Conexão com BD MySQL foi estabelecida');
  
  return mysql.createConnection({
    host: dataMysql.host,
    port: dataMysql.port,
    user: dataMysql.user,
    password: dataMysql.password,
    database: dataMysql.database
  });
};


module.exports =  connMySQL 

