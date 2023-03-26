// Declaração da função construtora NoticiasDAO que recebe a conexão com o banco de dados
function NoticiasDAO(connection) {
  // Atribuição da conexão recebida como parâmetro para a propriedade _connection do objeto atual
  this._connection = connection;
}

// Criação do método getNoticias na propriedade prototype do objeto NoticiasDAO
NoticiasDAO.prototype.getNoticias = function (callback) {
  // Utilização do método query da conexão com o banco de dados para buscar todas as notícias e chamar a função callback com os resultados
  this._connection.query('SELECT * FROM noticias', callback);
};

// Criação do método getNoticia na propriedade prototype do objeto NoticiasDAO
NoticiasDAO.prototype.getNoticia = function (id, callback) {
  // Utilização do método query da conexão com o banco de dados para buscar a notícia com o id especificado e chamar a função callback com os resultados
  this._connection.query('SELECT * from noticias WHERE id_noticia = ?', [id], callback);
};

// Criação do método SalvarNoticia na propriedade prototype do objeto NoticiasDAO
NoticiasDAO.prototype.SalvarNoticia = function (noticia,imgLink, callback) {
  // Utilização do método query da conexão com o banco de dados para inserir uma nova notícia e chamar a função callback com os resultados
  this._connection.query(`INSERT INTO noticias (titulo, noticia, img) values (?,?,?)`,[noticia.titulo, noticia.noticia, imgLink], callback);
};

// Criação do método ApagarNoticia na propriedade prototype do objeto NoticiasDAO
NoticiasDAO.prototype.ApagarNoticia = function (id, callback) {
  // Utilização do método query da conexão com o banco de dados para apagar a notícia com o id especificado e chamar a função callback com os resultados
  this._connection.query('DELETE FROM noticias WHERE id_noticia = ?', [id], callback);
};

// Criação do método UpDateNoticia na propriedade prototype do objeto NoticiasDAO
NoticiasDAO.prototype.UpDateNoticia = function (noticia, callback) {
  // Utilização do método query da conexão com o banco de dados para atualizar a notícia com o id especificado e chamar a função callback com os resultados
  this._connection.query(`UPDATE noticias SET titulo = ?, noticia = ?  WHERE id_noticia = ?`,
    [noticia.titulo, noticia.noticia, noticia.id], callback);
};

// Exportação da função construtora NoticiasDAO como um módulo Node.js
module.exports = () => { return NoticiasDAO; };

