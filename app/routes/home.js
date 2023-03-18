module.exports = function (app) {

	app.get('/', async function (req, res) {

		const pool = app.config.dbConnection;

		pool.query('SELECT * FROM noticias', (err, result) => {

			 if(err){ console.log(err) }

			
			res.render('home/home.ejs', { dados: result });
		})

	});

}

