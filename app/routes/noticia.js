module.exports = (app) => {

    app.get('/noticia', async function(req,res){ 
	     const { id } = req.query
        var db = app.config.dbConnection();
        var pool = app.config.dbConnection()
    
     if(!id){
     return  res.status(404).send(

       `<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <center><h1> Oxee cade o id/???????? </h1></center>
        <br><hr>
        <center>
        <a href="/noticias">
        <button type="button" class="btn btn-outline-dark">Pagina /noticias</button>
        </a>
        </center>
        `
       )
     }

      var result = await pool.query('SELECT * FROM noticias WHERE id_noticia = $1', [id])
    
      console.log(result.rows)
      res.render("noticias/noticia", {dados: result.rows});
        
            
    });
}