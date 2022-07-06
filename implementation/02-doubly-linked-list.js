// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // constant time

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
        } else {
            this.tail = newNode;
        }
        this.head = newNode;
        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newTail = new DoublyLinkedNode(val);
        if(!this.head) {
            this.head = newTail;
        } else {
            newTail.prev = this.tail;
            this.tail.next = newTail;
        }

        this.tail = newTail;
        this.length++;

        // Write your hypothesis on the time complexity of this method here
        // constant time because now we have references to the tail and we can go there immediately without having to traverse through the list
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) {return undefined}
        let removed = this.head.value;

        if (this.head.next) {
            this.head.next.prev = null;
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        this.length--;
        return removed;

        // Write your hypothesis on the time complexity of this method here
        // constant time
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.tail) {return undefined}

        let removed = this.tail.value;

        this.tail.next = null;
        this.tail = this.tail.prev;

        this.length--;
        return removed;

        // Write your hypothesis on the time complexity of this method here
        // constant time
    }

    peekAtHead() {
        // Return value of head node
        if (this.head) {return this.head.value}
        return undefined

        // Write your hypothesis on the time complexity of this method here
        // constant time
    }

    peekAtTail() {
        // Return value of tail node
        if (this.tail) {return this.tail.value}
        return undefined

        // Write your hypothesis on the time complexity of this method here
        // constant time
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
