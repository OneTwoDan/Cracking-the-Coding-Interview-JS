const { ListNode, deleteMiddleNode } = require('./deleteMiddleNode');

test('deleteMiddleNode deletes the middle node', () => {
    const a = new ListNode('a');
    const b = new ListNode('b');
    const c = new ListNode('c');
    const d = new ListNode('d');
    const e = new ListNode('e');
    const f = new ListNode('f');

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;

    deleteMiddleNode(c);

    expect(a.next.value).toBe('b');
    expect(a.next.next.value).toBe('d');
    expect(a.next.next.next.value).toBe('e');
    expect(a.next.next.next.next.value).toBe('f');
    expect(a.next.next.next.next.next).toBeNull();
});

test('deleteMiddleNode returns false for null or last node', () => {
    const node1 = new ListNode('a');
    const node2 = new ListNode('b');
    node1.next = node2;

    expect(deleteMiddleNode(node2)).toBe(false);

    expect(deleteMiddleNode(null)).toBe(false);
});
