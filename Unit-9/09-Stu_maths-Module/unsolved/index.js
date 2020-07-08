var Math = require("./maths.js");

var operation = process.argv[2]

var numX = parseInt(process.argv[3]);
var numY = parseInt(process.argv[4]);



switch(operation){
  case "sum":
    console.log(Math.sum(numX, numY));
    break;
  case "difference":
    console.log(Math.difference(numX, numY));
    break;
  case "product":
    console.log(Math.product(numX, numY));
    break;
  case "quotient":
    console.log(Math.quotient(numX, numY));
    break;
}
