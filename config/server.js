var express = require('express'); // importando o express
var consign = require('consign'); // importando o consign
var path = require('path') // path lida com os caminhos 
var app = express(); // armazenando e executando o express

/** Configuração do ejs */
app.set('view engine', 'ejs');
// app.set('views', './app/views');
app.set("views", path.join(__dirname, "../app/views")); // onde fica as telas das páginas.
app.use(express.static(path.join(__dirname, "../app/public"))) // onde vai ficar todo o css.



 // configuração do consign para iniciar as rotas
consign()
  .include('app/routes')
  .then('config/dbConnection.js')
  .into(app);


  // caso o user acesse uma rota que não existe..!!
app.use('*', (req,res, next) =>{

  res.status(404).send('Que que tu ta tentando entrar ai meu chapa')
})  

 // 
module.exports = app;

