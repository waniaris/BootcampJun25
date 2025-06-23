function calculate(num1, num2, operation) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Invalid input: both arguments must be numbers.";
    }
    switch (operation) {
        case "add":
        return num1 + num2;
        case "subtract":
        return num1 - num2;
        case "multiply":
        return num1 * num2;
        case "divide":
        if (num2 === 0) {
            return "Error: Cannot divide by zero.";
        }
        return num1 / num2;
    default:
        return "Unknown operation. Please use 'add', 'subtract', 'multiply', or 'divide'.";
    }
}

console.log(calculate(3, 5, "add"));       // 15
console.log(calculate(3, 5, "subtract"));  // 5
console.log(calculate(3, 5, "multiply"));  // 50
console.log(calculate(3, 5, "divide"));    // 2
console.log(calculate(3, 0, "divide"));    // Error: Cannot divide by zero.
console.log(calculate(3, 5, "test"));   // Error: Invalid operation.
console.log(calculate(3, '5', "add"));   // Invalid input: both arguments must be numbers.
console.log(calculate(3, 7, "minus"));    // Error: Unknown operation. Please use 'add', 'subtract', 'multiply', or 'divide'.