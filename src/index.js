const fs = require('fs');
const ytdl = require('ytdl-core');

var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/all/:limit', function (req, res) {
  res.send('hello world')
})


function download(video) {
    ytdl("https://www.youtube.com/watch?v=dPKG1-3LXBs", { quality: 'highestaudio', filter: 'audioonly' }).pipe(fs.createWriteStream('readyornot.mp3'));
}