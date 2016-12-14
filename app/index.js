// app/index.js
console.log("hello from Node.js");

var calc = require('./calc');

var numbersToAdd = [3,4,10,2];

var result = calc.sum(numbersToAdd);
console.log("The result is: "+  result)
