var async = require('asyncawait/async');
var await = require('asyncawait/await');

const fs = require('fs');

// Imports for routing and http
var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();
var http           =        require('http').Server(app);

// Configure express for the POST parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to the music Library
const Library = require('./Library.js');

// respond with "hello world" when a GET request is made to the homepage
app.get('/all/:limit', async function (req, res) {
    var response = await Library.all();
    res.send(response);
})

app.get('/download/:id/', async function(req, res) {
    await Library.download(req.params.id, req.query.title, req.query.artist, req.query.album);
    res.send(JSON.stringify({
        status: 201
    }));
    //res.send("Downloaded <a href='https://youtube.com/watch?v=" + req.params.id + "'>" + req.query.title + "</a> by " + req.query.artist + " (" + req.query.album + ")");
});

app.post('/download/:id/', async function (req, res) {
    await Library.download(req.params.id, req.body.title, req.body.artist, req.body.album);
    console.log("[ info ]: Downloaded (" + req.params.id + ") " + req.body.title);
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
