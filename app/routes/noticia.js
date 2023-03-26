module.exports = (app) => {

  app.get('/noticia', async function (req, res) {
    const { id } = req.query // pegar o id pelo req

    const pool = app.config.dbConnection(); // pegando a conection do banco de dados
    const noticiasModel = new app.app.models.NoticiasDAO(pool) 

    // pegando um noticia com o id informado na query 
    noticiasModel.getNoticia(id, (err, result)=>{
     if(err){ console.log(err) }
      
      res.render("noticias/noticia", { noticias: result});// render a pagina ejs para mostrar a noticia
    })
  });
}