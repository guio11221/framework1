module.exports = function(app){

  this.getNoticias = function(connection, callback){
    connection.query('SELECT * from noticias', callback)
  }

   this.getNoticia = function(connection, callback){
    connection.query('SELECT * from noticias WHERE id_noticia = ?',[1], callback)
   }

   this.noticiasSalvar = function(noticia, connection, callback){
    connection.query('INSERT into noticias set ?', noticia, callback)
   }

   return this
}