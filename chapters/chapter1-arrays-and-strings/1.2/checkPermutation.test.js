const { isPermutation } = require('./checkPermutation');

test('isPermutation function', () => {
    expect(isPermutation("abc", "cba")).toBe(true);
    expect(isPermutation("dog", "god")).toBe(true);
    expect(isPermutation("Apple", "ppleA")).toBe(true);
    expect(isPermutation("abcd", "abc")).toBe(false);
    expect(isPermutation("apple", "pplee")).toBe(false);
    expect(isPermutation("", "")).toBe(true);
    expect(isPermutation("abc", "")).toBe(false);
    expect(isPermutation("hello world", "dlrow olleh")).toBe(true);
});
