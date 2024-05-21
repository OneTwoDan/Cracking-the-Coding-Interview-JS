const { isPalindromePermutation } = require('./palindromePermutation');

describe('isPalindromePermutation', () => {
    test('should return true for string "Tact Coa"', () => {
        expect(isPalindromePermutation('Tact Coa')).toBe(true);
    });

    test('should return true for string "aabb"', () => {
        expect(isPalindromePermutation('aabb')).toBe(true);
    });

    test('should return false for string "hello"', () => {
        expect(isPalindromePermutation('hello')).toBe(false);
    });

    test('should return true for string "A man a plan a canal Panama"', () => {
        expect(isPalindromePermutation('A man a plan a canal Panama')).toBe(true);
    });

    test('should return true for string "racecar"', () => {
        expect(isPalindromePermutation('racecar')).toBe(true);
    });

    test('should return true for string "abba"', () => {
        expect(isPalindromePermutation('abba')).toBe(true);
    });

    test('should return false for string "abcde"', () => {
        expect(isPalindromePermutation('abcde')).toBe(false);
    });

    test('should return true for empty string', () => {
        expect(isPalindromePermutation('')).toBe(true);
    });

    test('should return true for single character string "a"', () => {
        expect(isPalindromePermutation('a')).toBe(true);
    });

    test('should return true for string with spaces only', () => {
        expect(isPalindromePermutation('   ')).toBe(true);
    });

    test('should return true for string "No lemon no melon"', () => {
        expect(isPalindromePermutation('No lemon no melon')).toBe(true);
    });

    test('should return true for string "Was it a car or a cat I saw"', () => {
        expect(isPalindromePermutation('Was it a car or a cat I saw')).toBe(true);
    });

    test('should return true for string with special characters "!@##@!"', () => {
        expect(isPalindromePermutation('!@##@!')).toBe(true);
    });
});
