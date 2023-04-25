const http = require('http');
const express = require('express');
const app = express();

// Create an instance of the http server to handle HTTP requests


app.use((req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Welcome to my app!');
    } else {
        next();
    }
});
app.get('/webhooks', (req, res) => {
    res.json({ title: "Nihal" });
});


var port = process.env.PORT || 4000;

// Listen on `port` and 0.0.0.0
app.listen(port, '0.0.0.0', function () {
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

