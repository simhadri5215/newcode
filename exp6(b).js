// app_b.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Home Page</h1>");
});

app.get('/about', (req, res) => {
    res.send("<h1>About Us Page</h1>");
});

app.get('/contact', (req, res) => {
    res.send("<h1>Contact Page</h1>");
});

// Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
