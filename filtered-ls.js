const fs = require('fs');
//path module allows access to the file directory
const path = require('path');

//readdir reads the contents in a directory
// extname returns the string part that comes after the period 
fs.readdir(process.argv[2], function (err, list){
    list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
        console.log(file);
    })
});