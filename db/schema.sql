DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
id int NOT NULL auto_increment,
burgerName varchar(255) NOT NULL,
PRIMARY KEY (id)
);