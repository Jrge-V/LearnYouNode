const fs = require('fs');

// we are using readFile()(asynchronous) here instead of readFileSync()
// readFile takes the file name in the first param and the callback function int he second param

// function(err, data) callback takes 2 parameters the error handler and data pramater for file contents

fs.readFile(process.argv[2], function (err, data){
    const lines = data.toString().split('\n').length - 1;
    console.log(lines);
})