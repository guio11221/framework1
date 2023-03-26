module.exports = function (app) {

	app.get('/noticias', async function (req, res) {
		const connection = app.config.dbConnection(); // pegando a conection com banco de dados 
		const noticiasModel = new app.app.models.NoticiasDAO(connection) // enviando a connection para a função NoticiasDAO

		//Pegando todas as noticias do banco de dados
		noticiasModel.getNoticias((err, result) => { // pegando a função que retorna todas as noticias do banco de dados

			// Renderizar a tela noticias
			res.render("noticias/noticias", { dados: result, message: 'oi' });
		})

	});
};