const NoticiasDAO = require("../models/NoticiasDAO");

module.exports = (app) => {
  app.get("/noticia", async function (req, res) {
    const { id } = req.query; // pegar o id pelo req
    const pool = app.config.dbConnection(); // pegando a conection do banco de dados
    const noticiasModel = new NoticiasDAO(pool);

    // pegando um noticia com o id informado na query
    noticiasModel.getNoticia(id, (err, result) => {
      if (err) return console.log(err)

      var errorMessage = req.flash("error");

      if (result == "") {
        req.flash("error", "Nenhum resultado encontrado com o ID: " + id);
        return res.redirect(req.headers.referer);
      } else {
        return res.render("noticias/noticia", {
          noticias: result,
          message: errorMessage.length > 0 ? errorMessage[0] : null,
        }); // render a pagina ejs para mostrar a noticia
      }
    });
  });

  app.get("/atualizarNoticia", (req, res) => {
    const { id } = req.query;

    const pool = app.config.dbConnection();
    const noticiasModel = new NoticiasDAO(pool);

    noticiasModel.getNoticia(id, (err, result) => {
      if (err) return console.log(err)

      res.render("noticias/atualizarNoticia.ejs", { noticias: result });
    });
  });

  app.post("/atualizarNoticia", (req, res) => {
    var noticia = req.body; // dados do formulário
    const connection = app.config.dbConnection(); // pegando a conexão com o banco
    const noticiasModel = new NoticiasDAO(connection); // pasando a conection como parametro

    noticiasModel.UpDateNoticia(noticia, (err, result) => {
      if (err) return console.log(err)
      // Redirecionar para a página /noticias
      req.flash("error", "Notícia atualizada com sucesso kkk"); // mensagem de retorno
      res.redirect(`/noticia?id=${noticia.id}`); // redireciona o user de novo para a paina da notícia
    });
  });
};
