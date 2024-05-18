const { urlify } = require('./urlify');

test('urlify replaces spaces with %20', () => {
    expect(urlify('Mr John Smith    ', 13)).toBe('Mr%20John%20Smith');
    expect(urlify('Hello World  ', 11)).toBe('Hello%20World');
    expect(urlify('a b c    ', 5)).toBe('a%20b%20c');
    expect(urlify('    ', 1)).toBe('%20');
    expect(urlify('NoSpaces', 8)).toBe('NoSpaces');
});

test('urlify handles empty string', () => {
    expect(urlify('', 0)).toBe('');
});

test('urlify handles string with no spaces', () => {
    expect(urlify('abc', 3)).toBe('abc');
});

test('urlify handles all spaces string', () => {
    expect(urlify('   ', 3)).toBe('%20%20%20');
});

test('urlify handles trailing spaces correctly', () => {
    expect(urlify('Trailing spaces  ', 15)).toBe('Trailing%20spaces');
});
