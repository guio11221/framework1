module.exports = function (app) {

	app.get('/formulario_inclusao_noticia', function (req, res) {
		
        const pool = app.config.dbConnection; 

		pool.query('SELECT * FROM  noticias', (err,result) => {

			res.render('admin/form_add_noticia.ejs', {dados: result});
		})

	});

}