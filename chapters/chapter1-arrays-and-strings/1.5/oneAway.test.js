const { oneEditAway } = require('./oneAway');

test('pale and ple should return true', () => {
    expect(oneEditAway('pale', 'ple')).toBe(true);
});

test('pales and pale should return true', () => {
    expect(oneEditAway('pales', 'pale')).toBe(true);
});

test('pale and bale should return true', () => {
    expect(oneEditAway('pale', 'bale')).toBe(true);
});

test('pale and bake should return false', () => {
    expect(oneEditAway('pale', 'bake')).toBe(false);
});

test('pale and pale should return true (zero edits)', () => {
    expect(oneEditAway('pale', 'pale')).toBe(true);
});

test('short and shorts should return true (one insert)', () => {
    expect(oneEditAway('short', 'shorts')).toBe(true);
});

test('shorts and short should return true (one remove)', () => {
    expect(oneEditAway('shorts', 'short')).toBe(true);
});

test('abcd and abcd should return true (zero edits)', () => {
    expect(oneEditAway('abcd', 'abcd')).toBe(true);
});

test('abcd and abcdef should return false (more than one insert)', () => {
    expect(oneEditAway('abcd', 'abcdef')).toBe(false);
});

test('abcdef and abcd should return false (more than one remove)', () => {
    expect(oneEditAway('abcdef', 'abcd')).toBe(false);
});
