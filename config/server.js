var express = require('express');
var consign = require('consign');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
  .include('app/routes')
  .then('config/dbConnection.js')
  .into(app);


app.use('*', (req,res, next) =>{

  res.status(404).send('Que que tu ta tentando entrar ai meu chapa')
})  
module.exports = app;

