// Declaração da função construtora NoticiasDAO que recebe a conexão com o banco de dados
function NoticiasDAO(connection) {
  conn = connection; // variavel que contem a conection do banco de dados mysql

  // Criação do método getNoticias na propriedade prototype do objeto NoticiasDAO
  this.getNoticias = function (callback) {
    // Utilização do método query da conexão com o banco de dados para buscar todas as notícias e chamar a função callback com os resultados
    conn.query("SELECT * FROM noticias", callback);
  };
  // Criação do método getNoticia na propriedade prototype do objeto NoticiasDAO
  this.getNoticia = function (id, callback) {
    // Utilização do método query da conexão com o banco de dados para buscar a notícia com o id especificado e chamar a função callback com os resultados
    conn.query("SELECT * from noticias WHERE id_noticia = ?", [id], callback);
  };
  // Criação do método SalvarNoticia na propriedade prototype do objeto NoticiasDAO
  this.SalvarNoticia = function (noticia, imgLink, callback) {
    // Utilização do método query da conexão com o banco de dados para inserir uma nova notícia e chamar a função callback com os resultados
    conn.query(
      `INSERT INTO noticias (titulo, noticia, img) values (?,?,?)`,
      [noticia.titulo, noticia.noticia, imgLink],
      callback
    );
  };
  // Criação do método ApagarNoticia na propriedade prototype do objeto NoticiasDAO
  this.ApagarNoticia = function (id, callback) {
    // Utilização do método query da conexão com o banco de dados para apagar a notícia com o id especificado e chamar a função callback com os resultados
    conn.query("DELETE FROM noticias WHERE id_noticia = ?", [id], callback);
  };
  // Criação do método UpDateNoticia na propriedade prototype do objeto NoticiasDAO
  this.UpDateNoticia = function (noticia, callback) {
    // Utilização do método query da conexão com o banco de dados para atualizar a notícia com o id especificado e chamar a função callback com os resultados
    conn.query(
      `UPDATE noticias SET titulo = ?, noticia = ?  WHERE id_noticia = ?`,
      [noticia.titulo, noticia.noticia, noticia.id],
      callback
    );
  };
}

// Exportação da função construtora NoticiasDAO como um módulo Node.js
module.exports = NoticiasDAO; 
