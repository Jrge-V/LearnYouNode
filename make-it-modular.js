// use new module in my program file
const mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], function (err, list){
    if (err)
    return console.error('An error occured', err)

    list.forEach(function (file) {
        console.log(file)
    })
})