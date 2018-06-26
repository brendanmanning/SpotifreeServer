var fs = require('fs');


class Library {
    

    static all() {
        
        fs.readdir(__dirname + '/data/music/', function(err, items) {       
            for (var i=0; i<items.length; i++) {
                console.log(items[i]);
            }
        });
    } 
}