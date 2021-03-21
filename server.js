var express = require('express');
var path = require('path');

//start app
var app = express();

//serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

//serve static content
app.use(express.static(path.join(__dirname, 'build')))

//listen
app.listen(3000);