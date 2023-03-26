const dataMysql = {
  host: "localhost", // local que o banco esta, no caso é local "Na nossa máquina"
  user: "root", // user
  password: "", // Senha do banco 
  database: "portal_noticias", // nome do banco que esta as tabelas..!!
};

const dataExpress = {
  // porta do servidor que sera rodado nossa aplicação
  PORT:  process.env.PORT || 3000 || 3001 || 5000 || 8000 || 8080 || 9000 
};

module.exports = {
  dataExpress: dataExpress,
  dataMysql: dataMysql
};
