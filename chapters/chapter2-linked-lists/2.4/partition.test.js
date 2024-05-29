const LinkedList = require('./partition');

test('Partitioning LinkedList around value 5', () => {
    const ll = new LinkedList();
    ll.add(3);
    ll.add(5);
    ll.add(8);
    ll.add(5);
    ll.add(10);
    ll.add(2);
    ll.add(1);

    ll.partition(5);

    expect(ll.toArray()).toEqual([3, 2, 1, 5, 8, 5, 10]);
});

test('Partitioning LinkedList around value 3', () => {
    const ll = new LinkedList();
    ll.add(3);
    ll.add(5);
    ll.add(8);
    ll.add(5);
    ll.add(10);
    ll.add(2);
    ll.add(1);

    ll.partition(3);

    expect(ll.toArray()).toEqual([2, 1, 3, 5, 8, 5, 10]);
});

test('Partitioning LinkedList around value 10', () => {
    const ll = new LinkedList();
    ll.add(3);
    ll.add(5);
    ll.add(8);
    ll.add(5);
    ll.add(10);
    ll.add(2);
    ll.add(1);

    ll.partition(10);

    expect(ll.toArray()).toEqual([3, 5, 8, 5, 2, 1, 10]);
});
