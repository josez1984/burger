CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int AUTO_INCREMENT,
    name varchar(255),
    devoured boolean,
    PRIMARY KEY(id)
);