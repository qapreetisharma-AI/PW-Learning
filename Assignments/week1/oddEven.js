// Function to check whether a number is Odd or Even
function isOddOrEven(number) {

    // Conditional statement to check divisibility by 2
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Declare and initialize the variable
let num = 10;

// Call the function and print the result
console.log(isOddOrEven(num));