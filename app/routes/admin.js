module.exports = function (app) {
  app.get("/formulario_inclusao_noticia", function (req, res) {
    const connection = app.config.dbConnection(); // pegando a conexão com o banco
    const noticiasModel = new app.app.models.NoticiasDAO(connection); // pasando a conection como parametro

    noticiasModel.getNoticias((err, result) => {
      if (err) { console.log(err) } // ver se teve error no query do banco de dados
      var errorMessage = req.flash("error");
      res.render("admin/form_add_noticia.ejs", {
        dados: result,
        message: errorMessage.length > 0 ? errorMessage[0] : null,
      });
    });
  });
  app.post("/noticia/salvar", (req, res) => {
    var noticia = req.body;
   const fs = require('fs')
    const connection = app.config.dbConnection(); // pegando a conexão com o banco
    const noticiasModel = new app.app.models.NoticiasDAO(connection); // pasando a conection como parametro

    //! Função para salvar a imagem da notícia que deseja salvar..!!
    let formato = req.files.arquivo.name.split("."); // pega só o formato 
    let imagem = ""; // armazenar em uma string
    if (
      formato[formato.length - 1] == "jpg" || // se o formato for jpg
      formato[formato.length - 1] == "png" // se o formato for png
    ) {
      imagem = new Date().getTime() + "." + formato[formato.length - 1]; // nome da imagem..!!
      req.files.arquivo.mv(
        __dirname + "../../pages/public/imagemNoticia/" + imagem // salvar a imagem nessa pasta ai
      );
    } else {
      fs.unlinkSync(req.files.arquivo.tempFilePath); // caso falhe
    }

    var img = `${req.protocol}://${req.headers.host}/imagemNoticia/${imagem}`; // salvar o cominho da imagem
    noticiasModel.SalvarNoticia(noticia, img, (err, result) => {
      if (err) {
        console.log(err);
        req.flash("error", "Error interno 😢, tente novamente..!!");
        return res.redirect("/formulario_inclusao_noticia");
      }
      req.flash("error", "Parabéns 😎 kk você salvou uma noticia nova..!!!");
      res.redirect("/noticias");
    });
  });

  app.get("/noticia/deletar", (req, res) => {
    //! exemplo /noticias/deletar?id=1

    var { id } = req.query; // pegando o id pelo query

    const connection = app.config.dbConnection(); // pegando a conexão com o banco
    const noticiasModel = new app.app.models.NoticiasDAO(connection); // pasando a conection como parametro

    noticiasModel.ApagarNoticia(id, (err, result) => {
      if (err) {
        console.log(err);
      } // ver se teve error no query do banco de dados

      // Redirecionar para a página /noticias
      req.flash("error", "Notícia Deletada com sucesso kkk"); // mensagem de retorno
      res.redirect("/noticias");
    });
  });

  app.post("/noticia/editar", (req, res) => {
    var noticia = req.body; // dados do formulário
    const connection = app.config.dbConnection(); // pegando a conexão com o banco
    const noticiasModel = new app.app.models.NoticiasDAO(connection); // pasando a conection como parametro

    noticiasModel.UpDateNoticia(noticia.id, noticia, (err, result) => {
      if (err) {
        console.log(err);
        req.flash(
          "error",
          "Teve um B.O para editar essa notícia ai kk tenta novamente ;--;"
        ); // mensagem de retorno
        res.redirect("/noticias");
      } // ver se teve error no query do banco de dados

      // Redirecionar para a página /noticias
      req.flash("error", "Notícia atualizada com sucesso kkk"); // mensagem de retorno
      res.redirect("/noticias");
    });
  });
};
