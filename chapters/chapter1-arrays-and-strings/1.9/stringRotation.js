// String Rotation:Assumeyou have a method isSubstringwhich checks if oneword is a substring of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat"). 

function isSubstring(str, sub) {
    return str.includes(sub);
}

function isRotation(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }
    const combined = s1 + s1;
    return isSubstring(combined, s2);
}

module.exports = { isRotation };

