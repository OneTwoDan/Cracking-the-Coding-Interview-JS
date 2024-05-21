// Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

/* EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco eta", etc.) */

function isPalindromePermutation(str) {
    let normalizedStr = str.toLowerCase().replace(/ /g, "");

    const charMap = {};
    for (let char of normalizedStr) {
        if (charMap[char] === undefined) {
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }

    let oddCount = 0;
    for (let char in charMap) {
        if (charMap[char] % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount <= 1;
}

module.exports = { isPalindromePermutation };