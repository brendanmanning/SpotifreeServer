const { table } = require('table');

var fse = require('fs-extra');

async function ls(callback) {

    let config,
    data,
    output;
 
    data = [
        ['#', 'YT ID', 'Title', 'Artist']
    ];
 
    config = {
        border: {
            topBody: `─`,
            topJoin: `┬`,
            topLeft: `┌`,
            topRight: `┐`,
 
            bottomBody: `─`,
            bottomJoin: `┴`,
            bottomLeft: `└`,
            bottomRight: `┘`,
 
            bodyLeft: `│`,
            bodyRight: `│`,
            bodyJoin: `│`,
 
            joinBody: `─`,
            joinLeft: `├`,
            joinRight: `┤`,
            joinJoin: `┼`
        }
    };

    try {

        var oitems = await fse.readdir(__dirname.substring(0, __dirname.lastIndexOf("/")) + '/data/metadata/');

        var items = [];
        for(var i = 0; i < oitems.length; i++) {
            if(!oitems[i].startsWith(".")) {
                items.push(oitems[i]);
            }
        }

        var arr = [];
        for (var i=0; i<items.length; i++) {

            // Isolate the video id
            let item = items[i];
            let id = item.substring(0, 11);
            arr.push(id);

            // Get the metadata for this song
            var meta = await fse.readFile(__dirname.substring(0, __dirname.lastIndexOf("/")) + '/data/metadata/' + id + ".json", "utf-8");
            meta = JSON.parse(meta);

            data[i+1] = ["#" + (i+1), id, meta.title, meta.artist];
        }

        // Print out the table
        output = table(data, config);
        console.log("\n" + output);

        if(callback != undefined) {
            callback(arr);
        }
    } catch (e) {
        console.log("Could not read metadata directory!");
        console.log(e);
    }
}

module.exports = ls;