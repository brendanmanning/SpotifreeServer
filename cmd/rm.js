var async = require('asyncawait/async');
var await = require('asyncawait/await');

var fse = require('fs-extra');
const readline = require('readline');

const ls = require('./ls.js');

async function rm(rl) {
    
    // List all songs for the user to choose to delete
    var ids = await ls();
    
    // Get the console input
    let query = await rl.question('Delete item #');
    rl.close();

    try {
        if(ids[query] != undefined) {
            var s1 = fse.unlinkSync("./data/metadata/" + ids[query] + ".json");
            var s2 = fse.unlinkSync("./data/music/" + ids[query] + ".m4a");
        }
    } catch (e) {
        console.log("Input invalid. Please try again.");
        rm(rl);
    }
}

module.exports = rm;