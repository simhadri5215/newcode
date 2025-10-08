// app_a.js
const express = require('express');
const app = express();

// Route
app.get('/', (req, res) => {
    res.send("Hello World");
});

// Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
