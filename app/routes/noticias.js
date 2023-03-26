module.exports = function (app) {
  app.get("/noticias", async function (req, res) {
    const connection = app.config.dbConnection(); // pegando a conection com banco de dados
    const noticiasModel = new app.app.models.NoticiasDAO(connection); // enviando a connection para a função NoticiasDAO

    noticiasModel.getNoticias((err, result) => {
      if (err) { console.log(err) } // ver se teve error no query do banco de dados

      var errorMessage = req.flash('error') // caso aja uma mensagem ele sera retornado 
      res.render("noticias/noticias", {
        dados: result,
        message: errorMessage.length > 0 ? errorMessage[0] : null
      });
    });
  });
};
