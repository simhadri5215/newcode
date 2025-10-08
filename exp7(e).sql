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
�� API Integration (Node.js Example: app.js)
const express = require(&#39;express&#39;);
const mysql = require(&#39;mysql2&#39;);
const app = express();

app.use (express.json ());
/
/
MySQL connection
const db = mysql.createConnection({
host: &#39;localhost&#39;,
user: &#39;root&#39;,
password: &#39;yourpassword&#39;, // change with your MySQL password
database: &#39;projectDB&#39;
});
/
/
Connect to DB db.connect(err =&gt;

{ if (err) throw err;

console.log(&quot;

✅ Connected to MySQL Database!&quot;

);

});
/
/
Example API route: Get all users
app.get(&#39;/users&#39;, (req, res) =&gt; {
db.query(&quot;

SELECT * FROM users & quot;

, (err, results) = & gt;

{ if (err) throw err;

res.json (results);

});

});
/
/
Start server app.listen(3000, () =&gt;

{ console.log(&quot;

�� Server running on http://localhost:3000&quot;

);

});