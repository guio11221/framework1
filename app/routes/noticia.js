module.exports = (app) => {

  app.get('/noticia', async function (req, res) {
    const { id } = req.query // pegar o id pelo req

    const pool = app.config.dbConnection; // pegando a conection do banco de dados

    // pegando um noticia com o id informado na query 
    pool.query('SELECT * FROM noticias WHERE id_noticia = ?', [id], async (err, result) => {

      // render a pagina ejs para mostrar a noticia
      res.render("noticias/noticia", { noticias: result/** Enviando os dados em JSON */ });
    })
  });
}