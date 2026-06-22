"use strict";
function factorial(n) {
    // Check for negative number
    if (n < 0) {
        throw new Error("Factorial cannot be calculated for negative numbers");
    }
    let result = 1;
    // Multiply numbers from 2 to n
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}
// Valid examples
console.log("Factorial of 5 =", factorial(5));
console.log("Factorial of 0 =", factorial(0));
console.log("Factorial of 7 =", factorial(7));
// Invalid example
try {
    console.log("Factorial of -3 =", factorial(-3));
}
catch (error) {
    console.log("Error:", error.message);
}
