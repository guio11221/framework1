module.exports = function(){

  this.getNoticias = (connection, callback) => {
    connection.query('SELECT * from noticias', callback)
  }

   this.getNoticia = (id, connection, callback) => {
    connection.query('SELECT * from noticias WHERE id_noticia = ?',[id], callback)
   }

   this.SalvarNoticia = (noticia, connection, callback) =>{
    console.log(noticia)
    connection.query(`INSERT INTO noticias (titulo, noticia) values (?,?)`,[noticia.titulo, noticia.noticia], callback)
   }

   return this
}