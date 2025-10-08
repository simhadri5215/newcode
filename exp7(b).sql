-- Create Table
CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    course VARCHAR(50)
);
-- Insert Data
INSERT INTO students (name, age, course) VALUES
(&#39;Rahul Sharma&#39;, 21, &#39;Computer Science&#39;),
(&#39;Anjali Verma&#39;, 22, &#39;Mathematics&#39;),
(&#39;Arjun Patel&#39;, 20, &#39;Physics&#39;);
-- Update Data
UPDATE students
SET course = &#39;Data Science&#39;
WHERE student_id = 2;