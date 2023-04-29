// declare variable result and make it equal to zero
var result = 0;

// making i = 2 ignores the first 2 arguments, those being "node" and "baby-steps.js"

// process.argv gives an array of the command line arguments

// i < process.argv.length is the length of the array (i.e doing "node .\baby-steps.js 1 2 3" would be a length of 5)

//using "Number" converts "1,2,3" from a string to a number for adding

// using += will keep adding the numbers in the array and process.argv[i] along with i++ takes care of the current postion  for as long as it is less than process.argv.length

for (var i = 2; i < process.argv.length; i++){
    result += Number(process.argv[i]);
}

//console log the additon of the numbers
console.log(result);