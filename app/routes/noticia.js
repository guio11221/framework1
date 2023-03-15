module.exports = (app) => {

  app.get('/noticia', async function (req, res) {
    const { id } = req.query // pegar o id pelo req

    const pool = app.config.dbConnection; // pegando a conection do banco de dados 

    if (!id) {  // verificando se o id não veio null
      return res.status(404).send(

        `<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <center><h1> Oxee cade o id/???????? </h1>
        <br>
        <h5>Exemplo:<code> <a href="http://localhost:3000/noticia?id=1">http://localhost:3000/noticia?id=1 </a></code></h5>
        </center>
        <br><hr>
        <center>
        <a href="/noticias">
        <button type="button" class="btn btn-outline-dark">Pagina /noticias</button>
        </a>
        </center>
        `
      )
    }

     // pegando um noticia com o id informado na query 
    pool.query('SELECT * FROM noticias WHERE id_noticia = ?', [id], (err, result) => {

       // mostrando no console
      console.log(result)

      // render a pagina ejs para mostrar a noticia
      res.render("noticias/noticia", { dados: result /** Enviando os dados em JSON */ });
    })
  });
}