// Given two strings, write a method to decide if one is a permutation of the other.

function isPermutation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

module.exports = { isPermutation };
