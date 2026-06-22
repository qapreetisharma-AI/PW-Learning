// Assignment: Factorial Calculation
// Learning Objective:
// Understand and apply basic programming constructs in TypeScript to compute the factorial of a
// non-negative integer using iterative methods.
// Expected Completion Time:
// Best Case: 15 min
// Average Case: 20 min
// Assignment Details:
// Create a TypeScript program that defines a function to compute the factorial of a given nonnegative integer using a loop (iterative approach).
// Assignment Requirements:
// 1. Write a function named `factorial` that accepts an argument `n`, which is a non-negative integer,
// and returns its factorial.
// 2. Include a check to ensure that the factorial is not computed for negative numbers. If a negative
// number is passed, the function should throw an error.
// 3. Use a loop to compute the factorial. Initialize a result variable and multiply it by each integer
// from 2 up to `n`.
// 4. Include example calls to the `factorial` function with different integers to demonstrate the
// function’s functionality. Include at least one example where an error is thrown due to a negative
// input.
// Expected Outcome:
// Upon completion, you should be able to:
// - Understand the concept of loops and conditionals in TypeScript.
// - Demonstrate the calculation of factorial for various inputs, handling both valid and invalid cases.

function factorial(n: number): number {

  // Check for negative number
  if (n < 0) {
    throw new Error("Factorial cannot be calculated for negative numbers")
  }

  let result = 1

  // Multiply numbers from 2 to n
  for (let i = 2; i <= n; i++) {
    result = result * i
  }

  return result
}

// Valid examples
console.log("Factorial of 5 =", factorial(5))
console.log("Factorial of 0 =", factorial(0))
console.log("Factorial of 7 =", factorial(7))

// Invalid example
try {
  console.log("Factorial of -3 =", factorial(-3))
} catch (error) {
  console.log("Error:", (error as Error).message)
}