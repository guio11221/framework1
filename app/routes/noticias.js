module.exports = function (app) {

	app.get('/noticias', async function (req, res) {

		const pool = app.config.dbConnection;


		var result = await pool.query('select * from noticias')

		console.log(result.rows)
		res.render("noticias/noticias", { dados: result.rows });


	});
};