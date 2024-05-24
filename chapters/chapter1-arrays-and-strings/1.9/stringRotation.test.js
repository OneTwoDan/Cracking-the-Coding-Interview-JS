const { isRotation } = require('./stringRotation');

test('waterbottle and erbottlewat', () => {
    expect(isRotation('waterbottle', 'erbottlewat')).toBe(true);
});

test('abcd and dabc', () => {
    expect(isRotation('abcd', 'dabc')).toBe(true);
});

test('abcd and cdab', () => {
    expect(isRotation('abcd', 'cdab')).toBe(true);
});

test('abcd and abcd', () => {
    expect(isRotation('abcd', 'abcd')).toBe(true);
});

test('abcd and bcda', () => {
    expect(isRotation('abcd', 'bcda')).toBe(true);
});

test('abcd and abdc', () => {
    expect(isRotation('abcd', 'abdc')).toBe(false);
});

test('different lengths', () => {
    expect(isRotation('abcd', 'abc')).toBe(false);
});

test('empty strings', () => {
    expect(isRotation('', '')).toBe(true);
});

test('empty and non-empty string', () => {
    expect(isRotation('', 'a')).toBe(false);
});
