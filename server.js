const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

//start app
var app = express();
const WEBHOOK_URL = process.env.WEBHOOK_URL;

//      HANDLE WEBSITE

//serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

//      HANDLE API

app.post('/api/send_message', (req, res) => {
    fetch(WEBHOOK_URL, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: `${req.query.name} - ${req.query.email}`,
            content: `${req.query.message}`,
        })
    });

    res.end();
})

//serve static content
app.use(express.static(path.join(__dirname, 'build')))

//listen
app.listen(3000);