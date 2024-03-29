const originalArray = [1, 3, 2, 5, 10];

const doubledArray = originalArray.map(function(data) {
  return data * 2;
});

console.log(doubledArray);
console.log(originalArray);

// Complete the following

// 1. A map that triples the originalArray and sets the result equal to a new `tripledArray` array

var tripleArray = originalArray.map(data => data*3); 

// 2. A map that takes the originalArray and returns a new array `oddOrEven`
// containing the text "even" if the number is even and the text "odd" if the number is odd
// i.e. using this map, the array [3, 1, 2, 4] should give us back ["odd", "odd", "even", "even"]

// Your code here

var oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return "even";
  }
  return "odd";
});

// Bonus: Use arrow functions as callbacks!
