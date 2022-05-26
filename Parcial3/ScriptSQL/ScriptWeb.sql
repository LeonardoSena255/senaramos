CREATE DATABASE L19100255;
use L19100255;

CREATE TABLE futbolista (
idJugador int AUTO_INCREMENT PRIMARY KEY,
nomJugador varchar(30),
nomEquipo varchar(30),
division varchar(15),
paisOrigen varchar(30),
fechaNac date,
edad smallint,
altura float(3),
posicion varchar(20)
);

insert into futbolista (nomJugador, nomEquipo, division, paisOrigen, fechaNac,edad,altura,posicion)
values ('Leonardo Sena','America','Primera','Mexico','2001-04-07',21,1.75,'Defensa');
insert into futbolista (nomJugador, nomEquipo, division, paisOrigen, fechaNac,edad,altura,posicion)
values ('Alfredo Ruiz','Toluca','Primera','Colombia','1995-07-21',27,1.70,'Delantero');
insert into futbolista (nomJugador, nomEquipo, division, paisOrigen, fechaNac,edad,altura,posicion)
values ('Mariano Perez','Boca Juniors','Primera','Argentina','1999-01-24',23,1.70,'Mediocampista');
insert into futbolista (nomJugador, nomEquipo, division, paisOrigen, fechaNac,edad,altura,posicion)
values ('Jorge Baldano','Valencia','Primera','Español','2000-08-10',22,1.65,'Defensa');
insert into futbolista (nomJugador, nomEquipo, division, paisOrigen, fechaNac,edad,altura,posicion)
values ('Juan Juarez','Granada','Segunda','Venezuela','1997-03-15',25,1.73,'Portero');
insert into futbolista (nomJugador, nomEquipo, division, paisOrigen, fechaNac,edad,altura,posicion)
values ('Pedro Mendez','Bravos','Tercera','Mexico','1989-12-01',33,1.67,'Defensa');
insert into futbolista (nomJugador, nomEquipo, division, paisOrigen, fechaNac,edad,altura,posicion)
values ('Tiago Merida','Chiva','Primera','Ecuador','1994-07-24',28,1.83,'Delantero');
insert into futbolista (nomJugador, nomEquipo, division, paisOrigen, fechaNac,edad,altura,posicion)
values ('Oscar Valbuena','Barcelona','Primera','Chile','2001-04-07',21,1.80,'Mediocampista');