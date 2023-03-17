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

        // console.log(noticiasModel)
        noticiasModel.SalvarNoticia(noticia, pool, (err, result)=>{

             if(err){ console.log(err) }

        //      console.log(result)
             res.redirect('/noticias')
        })

	})

}