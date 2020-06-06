--  * Create a MySQL database named `'chirpy'` with a `'chirps'` table to hold your data.
    -- * Your `'chirp'` table should include a field for id, author, chirp, and time created. 

CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  -- TABLE CODE TO GO HERE
  id INT NOT NULL AUTO_INCREMENT,
  author VARCHAR(255) NOT NULL,
  chirp VARCHAR (255) NOT NULL,
  time_created DATETIME
);