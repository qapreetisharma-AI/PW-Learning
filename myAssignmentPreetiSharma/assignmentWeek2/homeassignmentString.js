function lengthOfLastWord(str) {
str = str.trim()

let words = str.split(" ")

let lastWord = words[words.length - 1]

return lastWord.length

}

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("fly me to the moon"))

function isAnagram(str1, str2) {
str1 = str1.toLowerCase()
str2 = str2.toLowerCase()


str1 = str1.split("").sort().join("")
str2 = str2.split("").sort().join("")

if (str1 === str2) {
    return true
} else {
    return false
}


}

console.log(isAnagram("listen", "silent"))
console.log(isAnagram("hello", "world"))
