// Function to check the type of number
function checkNumberType(number) {

    // Conditional statements
    if (number > 0) {
        return "Positive Number";
    } else if (number < 0) {
        return "Negative Number";
    } else {
        return "Zero";
    }
}

// Declare and initialize the variable
let num = -9;

// Call the function and print the result
console.log(checkNumberType(num));