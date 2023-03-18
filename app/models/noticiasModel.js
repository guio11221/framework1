module.exports = function () {

  // Pega todas as Notícias
  this.getNoticias = (connection, callback) => {
    connection.query('SELECT * from noticias', callback)
  }
  // Pega a notícia pelo id
  this.getNoticia = (id, connection, callback) => {
    connection.query('SELECT * from noticias WHERE id_noticia = ?', [id], callback)
  }
  // Salva a notícia
  this.SalvarNoticia = (noticia, connection, callback) => {
    connection.query(`INSERT INTO noticias (titulo, noticia) values (?,?)`, [noticia.titulo, noticia.noticia], callback)
  }
  // Apaga a notícia pelo id
  this.ApagarNoticia = (id, connection, callback) => {
    connection.query('DELETE FROM noticias WHERE id_noticia = ?', [id], callback)
  }
  // Atualiza a notícia pelo id
  this.UpDateNoticia = (id, noticia, connection, callback) => {
    connection.query(`UPDATE noticias SET titulo = ?, noticia = ?  WHERE id_noticia = ?`,
      [noticia.titulo, noticia.noticia, id], callback)
  }

  return this
}