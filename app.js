const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const accountSid = process.env.ACCOUNT_ID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
app.use(bodyParser.json());
// Create an instance of the http server to handle HTTP requests


app.use((req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Welcome to my app!');
    } else {
        next();
    }
});
app.get('/webhooks/tradingview', (req, res) => {
    res.json({ title: "Nihal" });
});

app.post('/webhooks/tradingview', (req, res) => {
    // Extract the data from the webhook payload
    const data = req.body;

    // Process the data as needed
    console.log('Received webhook payload:', data);
    client.calls.create({
        twiml: '<Response><Say>Hello from Nihal!</Say></Response>',
        to: '+918423864626',
        from: '+16074008479'
    })
        .then(call => console.log(call.sid))
        .catch(error => console.log(error));

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

