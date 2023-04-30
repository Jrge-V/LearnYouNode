// use net module
const net = require('net');

// function zero fill, uses ? : which is shorthand for if-else
function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

//function for Dat() object to get month date year hours and minutes
function now() {
    let d = new Date()
    return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

// The function that you need to pass to net.createServer() is a
// connection listener that is called more than once. Every connection
// received by your server triggers another call to the listener.
const server = net.createServer(function (socket){
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))

