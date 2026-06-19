//Function to reverse a string
function reverseString(text) {
let reversedText = ""

// Loop from last character to first character
for (let i = text.length - 1; i >= 0; i--) {
    reversedText = reversedText + text[i]
}

return reversedText;

}

//Function to check palindrome
function checkPalindrome(text) {
let reversedText = reverseString(text)

if (text === reversedText) {
    return true
} else {
    return false
}

}
let word1 = "JavaScript"
console.log("Original String:", word1)
console.log("Reversed String:", reverseString(word1))
console.log("Palindrome:", checkPalindrome(word1))

let word2 = "Playwright"
console.log("Original String:", word2)
console.log("Reversed String:", reverseString(word2))
console.log("Palindrome:", checkPalindrome(word2))

let word3 = "Python"
console.log("Original String:", word3)
console.log("Reversed String:", reverseString(word3))
console.log("Palindrome:", checkPalindrome(word3))