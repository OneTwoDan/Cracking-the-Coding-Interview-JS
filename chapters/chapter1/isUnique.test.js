const { hasUniqueCharacters, hasUniqueCharactersNoDS } = require('./isUnique');

test('hasUniqueCharacters function', () => {
    expect(hasUniqueCharacters("abcdef")).toBe(true);
    expect(hasUniqueCharacters("aabbcc")).toBe(false);
    expect(hasUniqueCharacters("AbCdEf")).toBe(true);
    expect(hasUniqueCharacters("AaBbCc")).toBe(false);
    expect(hasUniqueCharacters("")).toBe(true);
    expect(hasUniqueCharacters("a")).toBe(true);
    expect(hasUniqueCharacters(" ")).toBe(true);
    expect(hasUniqueCharacters("abc def")).toBe(true);
});

test('hasUniqueCharactersNoDS function', () => {
    expect(hasUniqueCharactersNoDS("abcdef")).toBe(true);
    expect(hasUniqueCharactersNoDS("aabbcc")).toBe(false);
    expect(hasUniqueCharactersNoDS("AbCdEf")).toBe(true);
    expect(hasUniqueCharactersNoDS("AaBbCc")).toBe(false);
    expect(hasUniqueCharactersNoDS("")).toBe(true);
    expect(hasUniqueCharactersNoDS("a")).toBe(true);
    expect(hasUniqueCharactersNoDS(" ")).toBe(true);
    expect(hasUniqueCharactersNoDS("abc def")).toBe(true);
});
