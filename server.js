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

app.use(express.urlencoded({
    extended: true
  }))

app.post('/api/send_message', (req, res) => {
    var que = Object.keys(req.body).length == 0 ? req.query : req.body;
    
    console.log(req.body);
    console.log(req.query);
    
    fetch(WEBHOOK_URL, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: `${que.name} - ${que.email}`,
            content: `${que.message}`,
        })
    });

    res.redirect('/');
})

//serve static content
app.use(express.static(path.join(__dirname, 'build')))

//listen
var server = app.listen(0 || process.env.PORT, () => {
    console.log(`Server running on ${server.address().port}`);
});
