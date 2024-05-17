// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function hasUniqueCharacters(str) {
    const strMap = {}

    str = str.toLowerCase();

    for (const char of str) {
        if (strMap[char]) {
            return false;
        }
        strMap[char] = true;
    }

    return true
}

// No Data structures
function hasUniqueCharactersNoDS(str) {
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

module.exports = { hasUniqueCharacters, hasUniqueCharactersNoDS };