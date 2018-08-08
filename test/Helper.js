var async = require('asyncawait/async');
var await = require('asyncawait/await');

var assert = require('assert');
var fs = require('fs');
var fse = require('fs-extra');
var path = require('path');

var Helper = require('../src/Helper');
describe("Helper.js", function() {
    describe("writeJsonToFile", function() {
      it("should reject invalid JSON", async function() {
        
        // First test == JSON is invalid
        var passed = false;
        try {
            await Helper.writeJsonToFile(undefined, "HelperTests/T1.txt");
        } catch (e) {
            passed = true;
        }
        assert.equal(passed, true);
      
      });
    });
});