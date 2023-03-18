module.exports = function (app) {

     app.get('/formulario_inclusao_noticia', function (req, res) {
          const pool = app.config.dbConnection;
          const getNoticia = app.app.models.noticiasModel

          getNoticia.getNoticias(pool, (err, result) => { // 

               res.render('admin/form_add_noticia.ejs', { dados: result });
          })

     });

     app.post('/noticia/salvar', (req, res) => {
          const pool = app.config.dbConnection;
          var noticiasModel = app.app.models.noticiasModel;
          var noticia = req.body;


          noticiasModel.SalvarNoticia(noticia, pool, (err, result) => {
               if (err) {
                    console.log(err);
               }

               res.redirect('/noticias');
          });
     });

     app.get('/noticia/deletar', (req, res) => {  //! exemplo /noticias/deletar?id=1

          const pool = app.config.dbConnection;
          const deletar = app.app.models.noticiasModel
          var { id } = req.query

          deletar.ApagarNoticia(id, pool, (err, result) => {
               if (err) { console.log(err) } // ver se teve error no query do banco de dados 

               // Redirecionar para a página /noticias
               res.redirect('/noticias')
          })
     })

     app.post('/noticia/editar', (req, res) => {

          const pool = app.config.dbConnection; // pegando a conexão com o banco
          const update = app.app.models.noticiasModel // pegando a função editar
          var noticia = req.body // dados do formulário


          update.UpDateNoticia(noticia.id, noticia, pool, (err, result) => { // query para atualizar
               if (err) { console.log(err) } // ver se teve error no query do banco de dados 

               // Redirecionar para a página /noticias
               res.redirect('/noticias')
          })
     })

}