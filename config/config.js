// dados que será usado pra armazenar dados sigilosos..!!

const dataMysql = {
  host: "localhost", // local que o banco esta, no caso é local "Na nossa máquina"
  user: "root", // user
  password: "", // local
  database: "portal_noticias", // nome do banco que esta as tabelas..!!
};

const dataExpress = {
  PORT:  process.env.PORT || 3001 || 3000 || 5000 || 8000 || 8080 || 9000 , // porta do servidor que sera rodado nossa aplicação
};

// exportando as variaveis
module.exports = {
  dataExpress: dataExpress,
  dataMysql: dataMysql,
};
