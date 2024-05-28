// Implement an algorithm to find the kth to last element of a singly linked list.

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (this.head === null) {
            this.head = new ListNode(value);
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new ListNode(value);
    }

    kthToLast(k) {
        if (this.head === null || k < 0) return null;
        let first = this.head;
        let second = this.head;
        for (let i = 0; i < k; i++) {
            if (first === null) return null;
            first = first.next;
        }
        while (first !== null && first.next !== null) {
            first = first.next;
            second = second.next;
        }
        return second.value;
    }
}

module.exports = { LinkedList };
