// app_d.js
const express = require('express');
const app = express();

app.use(express.json());

let users = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Test User" }
];

// Create
app.post('/users', (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.json(newUser);
});

// Read
app.get('/users', (req, res) => {
    res.json(users);
});

// Update
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).send("User not found");
    user.name = req.body.name;
    res.json(user);
});

// Delete
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.send("User deleted");
});

// Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
