const http = require('http');
const url = require('url');

//create http server
const server = http.createServer(function (request, response) {

    if (request.method=='GET') {
        response.writeHead(200, {'Content-Type': 'application/json'});

        // parse req url to get parameter in query 
        const parsedReq = url.parse(request.url, true);

        let date = new Date(parsedReq.query['iso']);
        if (parsedReq.pathname == "/api/parsetime") {

            //create response object with h,m,s 
            date = '{"hour":'+ date.getHours() +',"minute":'+ date.getMinutes() +',"second":'+ date.getSeconds() +'}';
        } else if (parsedReq.pathname == "/api/unixtime") {

            //create response object with unix time 
            date = '{"unixtime":'+ Date.parse(date.toISOString()) +'}';
        }
        //send the JSON res object as response
        response.end(date);
    }
});
server.listen(process.argv[2]);