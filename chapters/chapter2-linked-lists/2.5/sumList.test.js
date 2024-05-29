const { Node, LinkedList } = require('./sumLists')

test('Sum Lists with digits stored in reverse order - Different lengths', () => {
    const l1 = new LinkedList();
    l1.add(7);
    l1.add(1);
    l1.add(6);

    const l2 = new LinkedList();
    l2.add(5);
    l2.add(9);

    const result = LinkedList.sumListsReverse(l1, l2);

    expect(result.toArray()).toEqual([2, 1, 7]);
});

test('Sum Lists with digits stored in reverse order - Carry at end', () => {
    const l1 = new LinkedList();
    l1.add(9);
    l1.add(9);
    l1.add(9);

    const l2 = new LinkedList();
    l2.add(1);

    const result = LinkedList.sumListsReverse(l1, l2);

    expect(result.toArray()).toEqual([0, 0, 0, 1]);
});

test('Sum Lists with digits stored in forward order - Different lengths', () => {
    const l1 = new LinkedList();
    l1.add(6);
    l1.add(1);
    l1.add(7);

    const l2 = new LinkedList();
    l2.add(2);
    l2.add(9);

    const result = LinkedList.sumListsForward(l1, l2);

    expect(result.toArray()).toEqual([6, 2, 6]);
});

test('Sum Lists with digits stored in forward order - Carry at beginning', () => {
    const l1 = new LinkedList();
    l1.add(9);
    l1.add(9);
    l1.add(9);

    const l2 = new LinkedList();
    l2.add(1);

    const result = LinkedList.sumListsForward(l1, l2);

    expect(result.toArray()).toEqual([1, 0, 0, 0]);
});
