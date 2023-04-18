// Declaração da função construtora NoticiasDAO que recebe a conexão com o banco de dados
function NoticiasDAO(connection) {
  conn = connection; // variável que contém a conexão do banco de dados MySQL

  // Criação do método getNoticias diretamente na função construtora
  this.getNoticias = function (callback) {
    // Utilização do método query da conexão com o banco de dados para buscar todas as notícias e chamar a função callback com os resultados
    conn.query("SELECT * FROM noticias", callback);
  };

  // Criação do método getNoticia diretamente na função construtora
  this.getNoticia = function (id, callback) {
    // Utilização do método query da conexão com o banco de dados para buscar a notícia com o id especificado e chamar a função callback com os resultados
    conn.query("SELECT * from noticias WHERE id_noticia = ?", [id], callback);
  };

  // Criação do método SalvarNoticia diretamente na função construtora
  this.SalvarNoticia = function (noticia, callback) {
    // Utilização do método query da conexão com o banco de dados para inserir uma nova notícia e chamar a função callback com os resultados
    conn.query(
      `INSERT INTO noticias (titulo, noticia, resumo, autor, data_noticia) values (?,?,?,?,?)`,
      [noticia.titulo, noticia.noticia, noticia.resumo, noticia.autor, noticia.data_noticia],
      callback
    );
  };

  // Criação do método ApagarNoticia diretamente na função construtora
  this.ApagarNoticia = function (id, callback) {
    // Utilização do método query da conexão com o banco de dados para apagar a notícia com o id especificado e chamar a função callback com os resultados
    conn.query("DELETE FROM noticias WHERE id_noticia = ?", [id], callback);
  };

  // Criação do método UpDateNoticia diretamente na função construtora
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
