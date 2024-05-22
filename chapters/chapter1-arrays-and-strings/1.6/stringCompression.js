// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z)

function compressString(inputString) {
    let compressedString = "";
    let currentCharCount = 1;

    for (let i = 1; i < inputString.length; i++) {
        const currentChar = inputString[i];
        const previousChar = inputString[i - 1];

        if (currentChar === previousChar) {
            currentCharCount++;
        } else {
            compressedString += previousChar + currentCharCount;
            currentCharCount = 1;
        }
    }

    compressedString += inputString[inputString.length - 1] + currentCharCount;

    if (compressedString.length < inputString.length) {
        return compressedString;
    } else {
        return inputString;
    }
}

module.exports = { compressString }