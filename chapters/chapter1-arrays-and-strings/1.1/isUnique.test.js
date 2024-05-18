const { hasUniqueCharacters, hasUniqueCharactersNoDS } = require('./isUnique');

describe('hasUniqueCharacters function', () => {
    test('returns true for a string with all unique characters', () => {
        expect(hasUniqueCharacters("abcdef")).toBe(true);
    });

    test('returns false for a string with repeated characters', () => {
        expect(hasUniqueCharacters("aabbcc")).toBe(false);
    });

    test('returns true for a string with all unique characters with mixed case', () => {
        expect(hasUniqueCharacters("AbCdEf")).toBe(true);
    });

    test('returns false for a string with repeated characters with mixed case', () => {
        expect(hasUniqueCharacters("AaBbCc")).toBe(false);
    });

    test('returns true for an empty string', () => {
        expect(hasUniqueCharacters("")).toBe(true);
    });

    test('returns true for a single character string', () => {
        expect(hasUniqueCharacters("a")).toBe(true);
    });

    test('returns true for a string with a single space', () => {
        expect(hasUniqueCharacters(" ")).toBe(true);
    });

    test('returns true for a string with unique characters including space', () => {
        expect(hasUniqueCharacters("abc def")).toBe(true);
    });
});

describe('hasUniqueCharactersNoDS function', () => {
    test('returns true for a string with all unique characters', () => {
        expect(hasUniqueCharactersNoDS("abcdef")).toBe(true);
    });

    test('returns false for a string with repeated characters', () => {
        expect(hasUniqueCharactersNoDS("aabbcc")).toBe(false);
    });

    test('returns true for a string with all unique characters with mixed case', () => {
        expect(hasUniqueCharactersNoDS("AbCdEf")).toBe(true);
    });

    test('returns false for a string with repeated characters with mixed case', () => {
        expect(hasUniqueCharactersNoDS("AaBbCc")).toBe(false);
    });

    test('returns true for an empty string', () => {
        expect(hasUniqueCharactersNoDS("")).toBe(true);
    });

    test('returns true for a single character string', () => {
        expect(hasUniqueCharactersNoDS("a")).toBe(true);
    });

    test('returns true for a string with a single space', () => {
        expect(hasUniqueCharactersNoDS(" ")).toBe(true);
    });

    test('returns true for a string with unique characters including space', () => {
        expect(hasUniqueCharactersNoDS("abc def")).toBe(true);
    });
});
