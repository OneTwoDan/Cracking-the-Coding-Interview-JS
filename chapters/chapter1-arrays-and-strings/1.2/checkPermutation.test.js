const { isPermutation } = require('./checkPermutation');

describe('isPermutation function', () => {
    test('returns true for permutations of the same string', () => {
        expect(isPermutation("abc", "cba")).toBe(true);
        expect(isPermutation("dog", "god")).toBe(true);
        expect(isPermutation("Apple", "ppleA")).toBe(true);
    });

    test('returns false for strings of different lengths', () => {
        expect(isPermutation("abcd", "abc")).toBe(false);
        expect(isPermutation("apple", "pplee")).toBe(false);
        expect(isPermutation("abc", "")).toBe(false);
    });

    test('returns true for empty strings', () => {
        expect(isPermutation("", "")).toBe(true);
    });

    test('returns true for permutations including spaces', () => {
        expect(isPermutation("hello world", "dlrow olleh")).toBe(true);
    });

    test('returns true for permutations with special characters', () => {
        expect(isPermutation("a!b@c", "c@b!a")).toBe(true);
        expect(isPermutation("123 456", "654 321")).toBe(true);
    });

    test('returns false for strings of different lengths with more cases', () => {
        expect(isPermutation("abcde", "abcd")).toBe(false);
    });

    test('returns true for single character strings', () => {
        expect(isPermutation("a", "a")).toBe(true);
    });

    test('returns true for permutations with repeated characters', () => {
        expect(isPermutation("aabbcc", "ccbbaa")).toBe(true);
    });

    test('returns false for non-permutations with repeated characters', () => {
        expect(isPermutation("aabbcc", "aabbc")).toBe(false);
    });

    test('is case-sensitive', () => {
        expect(isPermutation("Hello", "hello")).toBe(false);
        expect(isPermutation("Hello", "oHell")).toBe(true);
    });

    test('returns true for permutations with non-alphabetic characters', () => {
        expect(isPermutation("12345", "54321")).toBe(true);
        expect(isPermutation("!@#$%", "%$#@!")).toBe(true);
    });

    test('returns false for non-permutations with non-alphabetic characters', () => {
        expect(isPermutation("12345", "1234")).toBe(false);
    });
});
