module.exports = function (app) {

	app.get('/', async function (req, res) {

		const connection = app.config.dbConnection(); // pegando a conection do banco de dados
		const noticiasModel = new app.app.models.NoticiasDAO(connection) // passando a connection com o banco por paramentro na função

		noticiasModel.getNoticias((err, result) => { // pegando a função que retorna todas as noticias do banco de dados
			if (err) { console.log(err) }

			res.render('home/home.ejs', { dados: result });
		})

	});

}

