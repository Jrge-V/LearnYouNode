const fs = require('fs');
const path = require('path');

//alows for the exports of the module
//filter creates an array that pass a test by the function
//catch errors using err and give it the value of null
module.exports = function (dir, filterStr, callback) {
    fs.readdir(dir, function (err, list) {

        if (err)
        return callback(err)

        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr
        })
        callback(null, list)
    })
}