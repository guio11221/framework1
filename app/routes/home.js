module.exports = function (app) {

	app.get('/', async function (req, res) {
     
		const pool = app.config.dbConnection;

	pool.query('SELECT * FROM noticias',(err, result) =>{

		res.render('home/home.ejs', {dados: result});
	})
		
	});

}

