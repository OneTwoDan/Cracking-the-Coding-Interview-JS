const { compressString } = require('./stringCompression');

test('compresses a string with repeated characters', () => {
    expect(compressString('aabcccccaaa')).toBe('a2b1c5a3');
});

test('returns the original string if compression is not smaller', () => {
    expect(compressString('abc')).toBe('abc');
    expect(compressString('aabbcc')).toBe('aabbcc');
});

test('handles empty strings', () => {
    expect(compressString('')).toBe('');
});

test('handles strings with no repeated characters', () => {
    expect(compressString('abcd')).toBe('abcd');
});

test('handles strings with single character', () => {
    expect(compressString('a')).toBe('a');
});

test('handles strings with two characters', () => {
    expect(compressString('aa')).toBe('a2');
    expect(compressString('ab')).toBe('ab');
});

test('compresses a string with mixed case characters', () => {
    expect(compressString('aAbBcCcC')).toBe('a1A1b1B1c1C2');
});
