module.exports = function (app) {
  // exportando
  app.get("/", async function (req, res) {
    const connection = app.config.dbConnection(); // pegando a conection do banco de dados
    const noticiasModel = new app.app.models.NoticiasDAO(connection); // passando a connection com o banco por paramentro na função
    noticiasModel.getNoticias((err, result) => {
      // pegando a função que retorna todas as noticias do banco de dados
      if (err) { console.log(err) } // ver se teve error no query do banco de dados

      var errorMessage = req.flash("error");
      res.render("home/home.ejs", {
        dados: result,
        message: errorMessage.length > 0 ? errorMessage[0] : null,
      });
    });
  });
};
