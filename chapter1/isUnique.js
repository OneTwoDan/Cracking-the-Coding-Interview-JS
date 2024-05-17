// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

const str1 = 'abcdef'
const str2 = 'aabbcc'

function hasUniqueCharacters(str) {
    const strMap = {}

    for (const char of str) {
        if (strMap[char]) {
            return false;
        }
        strMap[char] = true;
    }

    return true
}

console.log(hasUniqueCharacters(str1))
console.log(hasUniqueCharacters(str2))

// No Data structures
function hasUniqueCharactersNoDS(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(hasUniqueCharactersNoDS(str1))
console.log(hasUniqueCharactersNoDS(str2))