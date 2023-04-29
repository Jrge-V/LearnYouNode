// http module
const http = require('http');

// get is used for making requests to a server
//using .on() to assign event handlers for data or error
http.get(process.argv[2], function (response) {
    response.setEncoding('utf-8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)