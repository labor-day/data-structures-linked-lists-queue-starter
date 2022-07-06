const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newTail = new SinglyLinkedNode(val);
        if (!this.head) {this.head = newTail;}

        if(this.tail) {this.tail.next = newTail;}

        this.tail = newTail;
        this.length++;
        return this.length;

        // Write your hypothesis on the time complexity of this method here
        // constant time
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if(this.length === 0) {return null}

        let removed = this.head.value;

        if(this.length === 1) {
            this.tail = null;
        }

        this.head = this.head.next
        this.length--;

        return removed;

        // Write your hypothesis on the time complexity of this method here
        // constant, we don't need to move every node forward, we just need to reassign references around the head
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
