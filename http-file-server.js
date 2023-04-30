const http = require('http');
const fs = require('fs');

// creating a new http server to listen for incoming req's
http.createServer( function (req, res) {
    //reads the stream and pipes it to the http res
    fs.createReadStream(process.argv[3]).pipe(res)
}).listen(+ process.argv[2], function () {
    //logs message to console with the port that it's listening in
    console.log('Server listening on http://localhost:%s', process.argv[2])
})