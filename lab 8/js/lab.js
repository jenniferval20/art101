
// index.js – Anon Functions and Callbacks
// Author: Jennifer
// Date: May 8

// Constants

// Functions

// Function to check if a number is even
function isEven(x) {
  return (x % 2 == 0);
}

// test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

var array = [100, 81, 4, 16, 42, 144, 10000];
console.log("My array:", array);

var result = array.map(isEven);
// should return [true, false, true, true, true, true, true]
console.log("Test of evenness of array:", result);

var result = array.map(function(x) {
  return Math.sqrt(x);
});
// should return [10, 9, 2, 4, 6.48074069840786, 12, 100]
console.log("Square root of array:", result);
