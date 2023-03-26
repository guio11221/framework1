module.exports = function (app) {
  app.get("/formulario_inclusao_noticia", function (req, res) {

    const connection = app.config.dbConnection(); // pegando a conexão com o banco
    const noticiasModel = new app.app.models.NoticiasDAO(connection); // pasando a conection como parametro

    noticiasModel.getNoticias( (err, result) => {
     if (err) { console.log(err) } // ver se teve error no query do banco de dados

      res.render("admin/form_add_noticia.ejs", { dados: result });
    });
  });
  app.post("/noticia/salvar", (req, res) => {
    var noticia = req.body;

    const connection = app.config.dbConnection(); // pegando a conexão com o banco
    const noticiasModel = new app.app.models.NoticiasDAO(connection); // pasando a conection como parametro

    noticiasModel.SalvarNoticia(noticia, (err, result) => {
     if (err) { console.log(err) } // ver se teve error no query do banco de dados

      res.redirect("/noticias");
    });
  });

  app.get("/noticia/deletar", (req, res) => {
    //! exemplo /noticias/deletar?id=1

    var { id } = req.query; // pegando o id pelo query

    const connection = app.config.dbConnection(); // pegando a conexão com o banco
    const noticiasModel = new app.app.models.NoticiasDAO(connection); // pasando a conection como parametro

    noticiasModel.ApagarNoticia(id, (err, result) => {
     if (err) { console.log(err) } // ver se teve error no query do banco de dados

      // Redirecionar para a página /noticias
      res.redirect("/noticias");
    });
  });

  app.post("/noticia/editar", (req, res) => {
    var noticia = req.body; // dados do formulário
    const connection = app.config.dbConnection(); // pegando a conexão com o banco
    const noticiasModel = new app.app.models.NoticiasDAO(connection); // pasando a conection como parametro

    noticiasModel.UpDateNoticia(noticia.id, noticia, (err, result) => {
      if (err) { console.log(err) } // ver se teve error no query do banco de dados

      // Redirecionar para a página /noticias
      res.redirect("/noticias");
    });
  });
};
