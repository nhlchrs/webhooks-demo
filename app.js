const http = require('http');

const express = require('express');
const app = express();
// Create an instance of the http server to handle HTTP requests


app.get('/webhooks', (req, res) => {
    res.json({ title: "Nihal" })
})
// Start the server on port 3000
app.listen(3000, () => {
    console.log('Node server running on port 3000');
});



