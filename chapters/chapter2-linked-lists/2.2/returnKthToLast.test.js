const { LinkedList } = require('./returnKthToLast');

test('kthToLast returns the correct value', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);

    expect(list.kthToLast(0)).toBe(5);
    expect(list.kthToLast(1)).toBe(4);
    expect(list.kthToLast(2)).toBe(3);
    expect(list.kthToLast(4)).toBe(1);
});

test('kthToLast returns null for k greater than the length of the list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.kthToLast(5)).toBeNull();
});

test('kthToLast returns null for negative k', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.kthToLast(-1)).toBeNull();
});

test('kthToLast returns null for empty list', () => {
    const list = new LinkedList();

    expect(list.kthToLast(0)).toBeNull();
});
