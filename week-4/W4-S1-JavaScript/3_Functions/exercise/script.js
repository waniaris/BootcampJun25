// TODO: Add the code here
function multiplyNumbers(a, b=4) {
  return a * b;
}

let result = multiplyNumbers(5);
console.log("The result is: " + result);

// Solution
// 1. put 2 numbers when calling the function : let result = multiplyNumbers(5, 3);
// 2. define b value
// 3. str will be converted to number, example '5' will become 5