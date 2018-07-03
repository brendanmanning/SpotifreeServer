const fs = require('fs');

var express = require('express');
var app = express();
var http = require('http').Server(app);

const Library = require('./Library.js');

// respond with "hello world" when a GET request is made to the homepage
app.get('/all/:limit', function (req, res) {
    Library.all();
})

app.post('/download/:id/',  function (req, res) {
    console.log(JSON.stringify(req.body));
     Library.download(req.params.id, req.body.title, req.body.artist, req.body.album);
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
