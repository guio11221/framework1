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

  res.status(404).send(

    `<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
     <center><h1> Página não encontrada </h1></center>
     <br><hr>
     <center>
     <a href="/noticias">
     <button type="button" class="btn btn-outline-dark">Pagina /noticias</button>
     </a>
     </center>
     `
    )
})  
module.exports = app;

