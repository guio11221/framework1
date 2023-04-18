const express = require("express"); // importando o express
const consign = require("consign"); // importando o consign
const path = require("path"); // importando o módulo de lidar com caminhos
const bodyParser = require("body-parser"); // importando o módulo de lidar com dados do formulário
const fileUpload = require("express-fileupload"); // importando o módulo de lidar com upload de arquivos
const flash = require("connect-flash"); // para enviar mensagem para o front end sobre o status da solicitação
const session = require("express-session"); // Criar um session com o express
const app = express(); // criando o servidor com o express
const axios = require('axios') // consumir api
const expressValidator = require('express-validator')

/** Configuração */
app.set("view engine", "ejs"); // definindo a engine de visualização para ejs
app.set("views", path.join(__dirname, "../app/pages/views")); // definindo o diretório das views
app.use(express.static(path.join(__dirname, "../app/pages/public"))); // definindo o diretório dos arquivos estáticos
app.use(flash()); // usando o middlieware do flash connect
app.use(express.json()); // habilitando o middleware de parsing de json
app.use(express.urlencoded({ extended: true })); // habilitando o middleware de parsing de urlencoded
app.use(bodyParser.urlencoded({ extended: true })); // habilitando o middleware de parsing de dados do formulário
app.use(bodyParser.json()); // habilitando o middleware de parsing de json para o body do request
app.use(expressValidator())


app.use( // criando uma session.
  session({
    secret: "TD2",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  fileUpload({ // habilitando o middleware de upload de arquivos
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"), // definindo o diretório temporário para armazenar os arquivos temporários
  })
);

// configurando o consign para carregar rotas e modelos e configurar a conexão com o banco de dados
consign()
  .include("app/routes") // incluindo as rotas
  .then("app/models") // incluindo os modelos
  .then("config/dbConnection.js") // incluindo a conexão com o banco de dados
  .into(app); // adicionando as rotas, modelos e conexão ao app express



app.get('/api', async (req, res) => {

  try {
    const { q } = req.query

    const { data } = await axios.get(`https://gnews.io/api/v4/search?q=${q}&lang=pt&country=br&max=1000&apikey=666ccdcb7f7afb07b3a5f23c5f64f607`)

    console.log(data)

    res.send(JSON.stringify(data, null, 2))
  } catch (error) {

    console.log(error)
  }

})



// middleware para lidar com rotas não encontradas
app.use("*", (req, res, next) => {
  res.status(404).render("404.ejs"); // render uma página 404
  next(); // proximo middleware
});

module.exports = app; // exportando o app para uso em outros arquivos
