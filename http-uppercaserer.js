const http = require('http');

// npm install through2-map, import the package
const map = require('through2-map')

//create http sercer
const server = http.createServer(function(req, res){
    //check for post method and pipe the request using the map function
    //transforms the stream to uppercase
    if (req.method=='POST'){
        req.pipe(map(function(chunk){
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
})

server.listen(process.argv[2])