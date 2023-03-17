module.exports = function (app) {

	app.get('/formulario_inclusao_noticia', function (req, res) {
		
   

        const pool = app.config.dbConnection; 
        

		pool.query('SELECT * FROM  noticias', (err,result) => {

			res.render('admin/form_add_noticia.ejs', {dados: result});
		})

	});

	app.post('/salvarNoticiaKKK', (req,res) => {

        const pool = app.config.dbConnection; 
        var noticiasModel = app.app.models.noticiasModel
        var noticia = req.body
        var { titulo, noticia } = req.body // outra forma de pegar

        console.log(noticiasModel)
        noticiasModel.noticiasSalvar(noticia, pool, (err, result)=>{

             if(err){ console.log }

             res.redirect('/noticias')
        })

	})

}