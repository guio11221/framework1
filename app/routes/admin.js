module.exports = function (app) {

     app.get('/formulario_inclusao_noticia', function (req, res) {

          // constantes 
          const connection = app.config.dbConnection(); // pegando a conexão com o banco
          const noticiasModel = new app.app.models.NoticiasDAO(connection) // pasando a conection como parametro

          noticiasModel.getNoticias(connection, (err, result) => { // 
               res.render('admin/form_add_noticia.ejs', { dados: result });
          })
     });
     app.post('/noticia/salvar', (req, res) => {
          var noticia = req.body;
          // constantes 
          const connection = app.config.dbConnection(); // pegando a conexão com o banco
          const noticiasModel = new app.app.models.NoticiasDAO(connection) // pasando a conection como parametro


          noticiasModel.SalvarNoticia(noticia, pool, (err, result) => {
               if (err) { console.log(err); }
               res.redirect('/noticias');
          });
     });

     app.get('/noticia/deletar', (req, res) => {  //! exemplo /noticias/deletar?id=1

          var { id } = req.query // pegando o id pelo query
          // constantes 
          const connection = app.config.dbConnection(); // pegando a conexão com o banco
          const noticiasModel = new app.app.models.NoticiasDAO(connection) // pasando a conection como parametro


          noticiasModel.ApagarNoticia(id, pool, (err, result) => {
               if (err) { console.log(err) } // ver se teve error no query do banco de dados 

               // Redirecionar para a página /noticias
               res.redirect('/noticias')
          })
     })

     app.post('/noticia/editar', (req, res) => {

          var noticia = req.body // dados do formulário
          // constantes 
          const connection = app.config.dbConnection(); // pegando a conexão com o banco
          const noticiasModel = new app.app.models.NoticiasDAO(connection) // pasando a conection como parametro

          noticiasModel.UpDateNoticia(noticia.id, noticia, (err, result) => { // query para atualizar
               if (err) { console.log(err) } // ver se teve error no query do banco de dados 

               // Redirecionar para a página /noticias
               res.redirect('/noticias')
          })
     })

}