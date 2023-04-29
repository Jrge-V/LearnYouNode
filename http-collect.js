const http = require('http');

// npm install bl
const bl = require('bl'); 

// bl module for streaming in node
// pipe stream using .pipe() method
http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err){
        return console.error(err)
    }
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})