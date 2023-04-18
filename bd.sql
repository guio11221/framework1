
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


use portal_noticias;

alter table noticias add column resumo varchar(100);
alter table noticias add column autor varchar(30);
alter table noticias add column data_noticia date;