-- Create a Database
CREATE DATABASE companyDB;
-- Use the Database
USE companyDB;
-- Create a Table inside the Database
CREATE TABLE employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department VARCHAR(50),
    salary DECIMAL(10, 2)
);