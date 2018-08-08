var async = require('asyncawait/async');
var await = require('asyncawait/await');

var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');

/**
 * Various helper functions for use throughout the app
 */
class Helper {

    /**
     * 
     * @param {JSON} json JSON object
     * @param {String} toFile File path to write to
     * 
     * @throws Throws an error when the file fails to write, or the JSON is unable to be stringified
     */
    static async writeJsonToFile(json, toFile) {
        
        let str = JSON.stringify(json);
        if(str == undefined) {
            throw Error("The JSON was invalid");
        }

        try {
            await fs.writeFile(toFile, str);
        } catch (error) {
            throw Error("Unable to write to file");
        }
    }
}

module.exports = Helper;