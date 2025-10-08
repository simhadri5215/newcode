// app_e.js
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",         // change if needed
    password: "yourpassword",  // change if needed
    database: "projectDB"
});

db.connect(err => {
    if (err) throw err;
    console.log("✅ Connected to MySQL Database!");
});

// API: Get Users
app.get('/users', (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// API: Add User
app.post('/users', (req, res) => {
    const { username, email, password } = req.body;
    const sql = "INSERT INTO users(username, email, password) VALUES(?, ?, ?)";
    db.query(sql, [username, email, password], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, username, email });
    });
});

// Start server
app.listen(3000, () => {
    console.log("✅ Server running at http://localhost:3000");
});
