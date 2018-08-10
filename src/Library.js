var async = require('asyncawait/async');
var await = require('asyncawait/await');

var fs = require('fs');
var fse = require('fs-extra');

const ytdl = require('youtube-dl');

const Helper = require('./Helper.js');

const Config = require('../config.json');

/**
 * Library class manages songs and metadata stored in the /data/music folder
 */
class Library {
    
    static async all() {
        
        try {
            var items = await fse.readdir('data/metadata/');
            
            var arr = [];
            for (var i=0; i<items.length; i++) {
                
                // Get the mp3 file and isolate the video id
                let item = items[i];
                let id = item.substring(0, 11);
                
                // Link to the metadata file
                try {
                    var meta = await fse.readFile('data/metadata/' + id + ".json", "utf-8");
                    meta = JSON.parse(meta);
                    meta.id = id;
                    meta.url = Config.RES_WEB_ADDRESS + id + ".mp3";
                    meta.type = "song";
                
                    arr.push(meta);
                } catch (e) {
                    console.log("Skipped file index " + i);
                    continue;
                }
            }
        } catch (e) {
            throw e;
        }

        return arr;
    } 

    static async download(id, title, artist, album) {

        console.log("Download: " + "https://www.youtube.com/watch?v=" + id);

        var video = ytdl.exec("https://www.youtube.com/watch?v=" + id, ['-x', '--audio-format', 'mp3', '-o', './data/music/%(id)s.%(ext)s'], {}, function(e,o) {
        });
        Helper.writeJsonToFile({
            title: title,
            artist: artist,
            album: album
        }, "data/metadata/" + id + ".json"); 

        //var dl = await ytdl("https://www.youtube.com/watch?v=" + id, { filter: (format) => format.container === 'm4a' });
        //await dl.pipe(fs.createWriteStream('data/music/' + id + '.m4a'));
        

    }
}

module.exports = Library;