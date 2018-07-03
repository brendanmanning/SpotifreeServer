var async = require('asyncawait/async');
var await = require('asyncawait/await');

const ytdl = require('ytdl-core');
var fs = require('fs');

/**
 * Library class manages songs and metadata stored in the /data/music folder
 */
class Library {
    
    static async all() {
        
        fs.readdir(__dirname + '/data/music/', function(err, items) { 
            
            var outputObject = {};

            for (var i=0; i<items.length; i++) {
                let item = items[i];

                console.log(item);
            }
        });
    } 

    static async download(id, title, artist, album) {
        var dl = ytdl("https://www.youtube.com/watch?v=" + id, { quality: 'highestaudio', filter: 'audioonly' });
        await dl.pipe(fs.createWriteStream('data/music/' + id + '.mp3'));
    }
}

module.exports = Library;