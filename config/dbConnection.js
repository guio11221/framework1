var mysql = require('mysql'); // modulo para se conectar ao Mysql
const { Pool } = require('pg'); // modulo para se conectar ao PgAdmin
const data = require('./config') // Dados para a conexão

var connMySQL =  () => {
	console.log('Conexão com BD foi estabelecida');
	return mysql.createConnection({
		host: data.host,
		port: data.port,
		user: data.user,
		password: data.password,
		database: data.database
	});
}

var pool =  () => { // me conectando com o PgAdmin

	console.log('Estabelecendo o pool da conexão..!!')
	return new Pool({
		user: 'postgres',
		host: 'localhost',
		database: 'portal_noticias',
		password: '1gf9cb8do',
		port: 5432, // ou outra porta se você configurou diferente
	});
}


module.exports = function () {
	return connMySQL && pool; // exportando as duas conexão kk 
}