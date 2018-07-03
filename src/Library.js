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
        await ytdl("https://www.youtube.com/watch?v=" + id, { quality: 'highestaudio', filter: 'audioonly' }).pipe(fs.createWriteStream(id + '.mp3'));
        console.log("Done....");
    }
}

module.exports = Library;