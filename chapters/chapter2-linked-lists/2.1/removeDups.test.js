const { removeDups } = require('./removeDups');

describe('LinkedList', () => {
    it('should remove duplicates from unsorted linked list', () => {
        const list = new removeDups();
        list.append(3);
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(1);
        list.append(4);

        list.removeDuplicates();

        expect(list.toArray()).toEqual([3, 1, 2, 4]);
    });

    it('should handle an empty list', () => {
        const list = new removeDups();

        list.removeDuplicates();

        expect(list.toArray()).toEqual([]);
    });

    it('should handle a list with no duplicates', () => {
        const list = new removeDups();
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);

        list.removeDuplicates();

        expect(list.toArray()).toEqual([1, 2, 3, 4]);
    });

    it('should handle a list with all duplicates', () => {
        const list = new removeDups();
        list.append(1);
        list.append(1);
        list.append(1);
        list.append(1);

        list.removeDuplicates();

        expect(list.toArray()).toEqual([1]);
    });
});
