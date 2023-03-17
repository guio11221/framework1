module.exports = (app) => {

  app.get('/noticia', async function (req, res) {
    const { id } = req.query // pegar o id pelo req

    const pool = app.config.dbConnection; // pegando a conection do banco de dados

    

    if (!id) {  // verificando se o id não veio null
      return res.status(404).send(

        `ERROR
        `
      )
    }

     // pegando um noticia com o id informado na query 
    pool.query('SELECT * FROM noticias WHERE id_noticia = ?', [id], async (err, result) => {
     
       // mostrando no console
      

      // render a pagina ejs para mostrar a noticia
      res.render("noticias/noticia", { noticias: result/** Enviando os dados em JSON */ });
    })
  });
}