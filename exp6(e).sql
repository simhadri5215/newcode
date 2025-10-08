CREATE DATABASE projectDB;

USE projectDB;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    B username VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(100)
);