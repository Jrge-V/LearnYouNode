// fs module from Node core library
const fs = require('fs');

// the method fs.readFileSync returns a buffer object containing the complete contents of the file
// with process.argv[2] being the third argument
const contents = fs.readFileSync(process.argv[2]);

// using toString() converts the buffer object into a string
// .split() splits the file at every new line
// giving the argument of '\n' tell the split method where to split at every new line
const str = contents.toString().split('\n');

// print the the number of new lines using length - 1
console.log(str.length - 1);




