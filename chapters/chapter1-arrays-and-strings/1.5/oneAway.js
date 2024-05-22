/* There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.

EXAMPLE

pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false */

function oneEditAway(firstString, secondString) {
    const length1 = firstString.length;
    const length2 = secondString.length;

    if (Math.abs(length1 - length2) > 1) {
        return false;
    }

    const shorter = length1 < length2 ? firstString : secondString;
    const longer = length1 < length2 ? secondString : firstString;

    let indexShorter = 0, indexLonger = 0;
    let foundDifference = false;

    while (indexShorter < shorter.length && indexLonger < longer.length) {
        if (shorter[indexShorter] !== longer[indexLonger]) {
            if (foundDifference) {
                return false;
            }
            foundDifference = true;

            if (length1 === length2) {
                indexShorter++;
            }
        } else {
            indexShorter++;
        }
        indexLonger++;
    }

    return true;
}

module.exports = { oneEditAway }