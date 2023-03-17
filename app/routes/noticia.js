module.exports = (app) => {

  app.get('/noticia', async function (req, res) {
    const { id } = req.query // pegar o id pelo req

    const pool = app.config.dbConnection; // pegando a conection do banco de dados

    var getNoticia = app.app.models.noticiasModel

    // pegando um noticia com o id informado na query 
    getNoticia.getNoticia(id, pool, (err, result)=>{

      // render a pagina ejs para mostrar a noticia
      res.render("noticias/noticia", { noticias: result/** Enviando os dados em JSON */ });
    })
  });
}