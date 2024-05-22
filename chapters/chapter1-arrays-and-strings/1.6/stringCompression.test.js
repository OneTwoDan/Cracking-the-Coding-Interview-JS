const { compressString } = require('./stringCompression');

test('compresses correctly when characters are repeated', () => {
    expect(compressString("aabcccccaaa")).toBe("a2b1c5a3");
    expect(compressString("aaaaaaa")).toBe("a7");
    expect(compressString("abbcccddddeeeee")).toBe("a1b2c3d4e5");
    expect(compressString("aaAA")).toBe("aaAA");
    expect(compressString("aaAaA")).toBe("aaAaA");
    expect(compressString("aabbbccccddeee")).toBe("a2b3c4d2e3");
});

test('does not compress when compressed string is longer or equal to original string', () => {
    expect(compressString("abcde")).toBe("abcde");
    expect(compressString("")).toBe("");
    expect(compressString("aabbccddee")).toBe("aabbccddee");
    expect(compressString("AABBCCDD")).toBe("AABBCCDD");
});