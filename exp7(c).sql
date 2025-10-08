-- Find students older than the average age
SELECT name, age FROM students WHERE age & gt;

( SELECT AVG(age) FROM students );
-- Find the department of the employee with the highest salary
SELECT department
FROM employees
WHERE
    salary = (
        SELECT MAX(salary)
        FROM employees
    );
-- Get employees who earn more than the average salary of IT department
SELECT name, salary FROM employees WHERE salary & gt;

(SELECT AVG(salary) FROM employees WHERE department = &#39;IT&#39;);