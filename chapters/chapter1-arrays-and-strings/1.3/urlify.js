// Write a method to replace all space in a string with ‘%20’. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the “true” length of the string.

// Example
// input:  "Mr John Smith    " , 13
// output: "Mr%20John%20Smith"

// input:  "    " , 1
// output: "%20"

function urlify(str, trueLength) {
    let trimmedStr = str.trim();

    if (trimmedStr === '') {
        return '%20'.repeat(trueLength);
    }

    let charArray = trimmedStr.split('');
    let spaceCount = 0;

    for (let i = 0; i < trueLength; i++) {
        if (charArray[i] === ' ') {
            spaceCount++;
        }
    }

    let newLength = trueLength + spaceCount * 2;

    for (let i = trueLength - 1; i >= 0; i--) {
        if (charArray[i] === ' ') {
            charArray[newLength - 1] = '0';
            charArray[newLength - 2] = '2';
            charArray[newLength - 3] = '%';
            newLength -= 3;
        } else {
            charArray[newLength - 1] = charArray[i];
            newLength -= 1;
        }
    }

    return charArray.join('');
}

module.exports = { urlify };
