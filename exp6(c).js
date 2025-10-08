// app_c.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <h1>Hello Express</h1>
    <script>
      console.log("Hello World from Express.js!");
    </script>
  `);
});

// Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
