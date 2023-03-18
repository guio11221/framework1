create database portal_noticias;
use portal_noticias;
create table noticias (id_noticia int not null primary key auto_increment, titulo varchar(100), noticia text, data_criacao timestamp default current_timestamp);
insert into noticias (titulo, noticia) values ("Primeira notícia", "O portal foi lançado");
insert into noticias (titulo, noticia) values ("Segunda notícia", "O portal está a todo vapor");
insert into noticias (titulo, noticia) values ("Terceira notícia kkkk","Nada não kk");
insert into noticias (titulo, noticia) values ("Quarta notícia","O portal está a todo vapor");
insert into noticias (titulo, noticia) values ("Titulo Da Notícia Salva","Isso é só um teste, pois não sei o que escrever kk");
select * from noticias