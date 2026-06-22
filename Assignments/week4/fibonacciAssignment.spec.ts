function fibonacci(n: number): number {

  if (n < 0) {
    throw new Error("Fibonacci cannot be calculated for negative numbers")
  }

  if (n === 0) {
    return 0
  }

  if (n === 1) {
    return 1
  }

  let first = 0
  let second = 1
  let next = 0

  for (let i = 2; i <= n; i++) {
    next = first + second
    first = second
    second = next
  }

  return second
}

// Example calls
console.log("Fibonacci of 0 =", fibonacci(0))
console.log("Fibonacci of 1 =", fibonacci(1))
console.log("Fibonacci of 5 =", fibonacci(5))
console.log("Fibonacci of 10 =", fibonacci(10))