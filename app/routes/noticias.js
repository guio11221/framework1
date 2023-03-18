module.exports = function (app) {

	// Criando a rota noticias
	app.get('/noticias', async function (req, res) {

		 // pegando a conection com banco de dados 
		const connection = app.config.dbConnection ;

		
        //Pegando todas as noticias do banco de dados
		 connection.query('select * from noticias', (err,result) => {

	
			res.render("noticias/noticias", { dados: result /** Enviando em JSON */ });
		 })




	});
};