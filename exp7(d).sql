-- database_script.sql
CREATE DATABASE schoolDB;

USE schoolDB;
-- Create table
CREATE TABLE courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    credits INT
);
-- Insert data
INSERT INTO courses (course_name, credits) VALUES
(&#39;Database Systems&#39;, 4),
(&#39;Operating Systems&#39;, 3),
(&#39;Machine Learning&#39;, 4);
-- Update Example
UPDATE courses
SET credits = 5
WHERE course_name = &#39;Machine Learning&#39;;