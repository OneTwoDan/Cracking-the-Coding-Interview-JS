/* Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node. 

EXAMPLE
lnput:the node c from the linked list a->b->c->d->e->f
Result: nothing is returned, but the new linked list looks like a->b->d->e->f  */

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function deleteMiddleNode(node) {
    if (node === null || node.next === null) {
        return false;
    }

    node.value = node.next.value;

    node.next = node.next.next;

    return true;
}

module.exports = { ListNode, deleteMiddleNode };
