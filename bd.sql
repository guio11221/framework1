
-- Criar o banco com as tabelas
create database  portal_noticias;
use portal_noticias;
-- Criando as tabelas
create table noticias (
    id_noticia int not null primary key auto_increment, 
    titulo varchar(100), 
    noticia text, 
    data_criacao timestamp default current_timestamp
);


