var async = require('asyncawait/async');
var await = require('asyncawait/await');

const readline = require('readline');
const fs = require('fs');

const ls = require('./cmd/ls.js')
const rm = require('./cmd/rm.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function loop() {
    
    rl.question('> ', (query) => {
       
        // Isolate the components of the response
        let components = query.split(" ");

        switch (components[0]) {
            case "ls": 
                ls(function(res){
                    loop();
                }); 
                break;
            case "rm": rm(); break;
        }

        rl.close();
    
    });
}


loop();