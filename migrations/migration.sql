DROP DATABASE IF EXISTS MultiplierDataBase;

CREATE DATABASE MultiplierDataBase;

USE MultiplierDataBase;

CREATE TABLE categorias (
  id INT NOT NULL auto_increment,
  código VARCHAR(100) NOT NULL,
  titulo VARCHAR(100) NOT NULL,
  status INT NOT NULL,
  PRIMARY KEY(id)
) ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;