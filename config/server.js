var express = require('express'); // importando o express
var consign = require('consign'); // importando o consign
var path = require('path') // path lida com os caminhos 
const bodyParser = require('body-parser') // lidar com o formulario 
const fileUpload = require('express-fileupload'); // lidar com os arquivos 
const fs = require('fs'); // lidar com o arquivo para eu salvar as imagens das noticias
var app = express(); // armazenando e executando o express

/** Configuração do ejs */
app.set('view engine', 'ejs');
// app.set('views', './app/views');
app.set("views", path.join(__dirname, "../app/views")); // onde fica as telas das páginas.
app.use(express.static(path.join(__dirname, "../app/public"))) // onde vai ficar todo o css.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//o bodyParser vai ser responsavel pelo tratamento do formulario.
// o extended: true é para ser implementado atraves do JSON
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: path.join(__dirname, 'tmp')
}));

 // configuração do consign para iniciar as rotas
consign()
  .include('app/routes') // incluido as rotas ao consign
  .then('app/models') // incluindo o models ao consign
  .then('config/dbConnection.js')
  .into(app);

  // caso o user acesse uma rota que não existe..!!
app.use('*', (req,res, next) =>{

  res.status(404).send('Que que tu ta tentando entrar ai meu chapa')

  next()
})  

 // 
module.exports = app;

