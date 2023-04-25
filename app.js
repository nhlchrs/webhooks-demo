const http = require('http');
const express = require('express');
const app = express();

// Create an instance of the http server to handle HTTP requests

app.get('/webhooks', (req, res) => {
    res.json({ title: "Nihal" });
});

// Start the server on port 3000
const server = app.listen(5000, () => {
    console.log('Node server running on port 3000');
});

// Handle unhandled rejections and exceptions
process.on('unhandledRejection', (err, promise) => {
    console.error(`Unhandled rejection: ${err.message}`);
    // Log the error to a file or a logging service
});

process.on('uncaughtException', (err, origin) => {
    console.error(`Uncaught exception: ${err.message}`);
    // Log the error to a file or a logging service
    server.close(() => {
        process.exit(1);
    });
});

