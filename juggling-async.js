const http = require('http');
const bl = require('bl');

const result = []

// create function print result that will be called by httpGet function
function printResult() {
    for (let i = 0; i < 3; i++)
        console.log(result[i])
}

let count = 0;

function httpGet(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }

            result[index] = data.toString()
            count++

            if (count == 3) {
                printResult()
            }

        }))
    })
}

// calls the httpget function 
for (let i = 0; i < 3; i++) {
    httpGet(i)
}

