const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Create an instance of the http server to handle HTTP requests


app.use((req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Welcome to my app!');
    } else {
        next();
    }
});
app.get('https://webhooks-demo-production.up.railway.app/webhooks', (req, res) => {
    res.json({ title: "Nihal" });
});

app.post('https://webhooks-demo-production.up.railway.app/webhooks/tradingview', (req, res) => {
    // Extract the data from the webhook payload
    const data = req.body;

    // Process the data as needed
    console.log('Received webhook payload:', data);

    // Send a response to TradingView
    res.status(200).send('Webhook received successfully');
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

