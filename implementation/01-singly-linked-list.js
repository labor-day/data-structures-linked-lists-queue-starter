// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        let newHead = new SinglyLinkedNode(val);
        if (this.head) {
            newHead.next = this.head;
        }
        this.head = newHead;
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
        // Constant time. We go directly to references,
        // rather than traversing through the entire list
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // O(n) linear time
        // We have to move through every node in the list to find the tail

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if(this.head) {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode
        }

        if (!this.head) {
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) {return undefined}

        let removed = this.head;
        this.head = this.head.next;
        this.length--;
        return removed;

        // Write your hypothesis on the time complexity of this method here
        // Constant time, we go directly to references
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) {return undefined}

        let removed;

        if (this.length === 1) {
            removed = this.head;
            this.head = null;
            this.length--;
            return removed;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        removed = current.next;
        current.next = null;

        this.length--;
        return removed;

        // Write your hypothesis on the time complexity of this method here
        // O(n), must traverse through the whole list
    }

    peekAtHead() {
        // Return value of head node
        if (this.head) {return this.head.value}
        return undefined

        // Write your hypothesis on the time complexity of this method here
        // constant time
    }

    print() {
        // Print out the linked list
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }

        // Write your hypothesis on the time complexity of this method here
        // Linear time
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
