// Write code to remove duplicates from an unsorted linked list.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class removeDups {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    removeDuplicates() {
        let current = this.head;
        let prev = null;
        const encountered = new Set();

        while (current) {
            if (encountered.has(current.data)) {
                prev.next = current.next;
            } else {
                encountered.add(current.data);
                prev = current;
            }
            current = current.next;
        }
    }

    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}

module.exports = { removeDups };

