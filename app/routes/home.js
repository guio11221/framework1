const NoticiasDAO = require('../models/NoticiasDAO')

module.exports = function (app) {
  app.get("/", async function (req, res) {
    const connection = app.config.dbConnection(); // pegando a conection do banco de dados
    const noticiasModel = new NoticiasDAO(connection); // passando a connection com o banco por paramentro na função
    noticiasModel.getNoticias((err, result) => {
      // pegando a função que retorna todas as noticias do banco de dados
      if (err) return console.log(err)  // ver se teve error no query do banco de dados

      var errorMessage = req.flash("error"); // verificar se tem aluma mensagem de error 
      res.render("home/home", {
        dados: result,
        message: errorMessage.length > 0 ? errorMessage[0] : null, // se o req.flash for null ele não retorna nenhuma mensagem.
      });
    });
  });
};
