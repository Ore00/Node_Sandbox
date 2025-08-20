const ListNode = require("./ListNode");

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(data) {
        let node = new ListNode(data);
        if (this.head) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
   
    getData(delimiter = "\n") {
        let current = this.head;
        let str = "";

        while(current) {
            str = current.next != null ? str.concat(current.data, delimiter) :str.concat(current.data);
            current = current.next;
        }
        return str;
    }

    insertAt(data, position) {
        if(position < 1 || position > this.length)  return;
        let node = new ListNode(data);
        let current = this.head;
        let pointer = 1;

        if(position === 1 ) {
            node.next = this.head;
            this.head = node;
            return this;
        }

        //set the pointer right before the position
        while(current && pointer < position -1) {
            pointer++;
            current = current.next;
        }
        if(current) {
            //set the next property of the new node to current node
            node.next = current.next;
            // set the next property of the current node to new node
            current.next = node;
        }
        return this;
    }

    remove(data) {
        if(!this.head || data == null)
            return null;

        if(this.head.data === data) {
            this.head = this.head.next;
            this.length--;
            return this;
        }
        let current = this.head;

        while(current.next) {
            if(current.next.data === data) {
                current.next = current.next.next;
                this.length--;
                return this;
            }
            current = current.next;
        }

        return null;
    }

    removeAt(position) {
        if(!this.head || position < 0 || position >= this.length )
            return null;

        if(position === 0) {
            this.head = this.head.next;
            this.length--;
            return this;
        }
        
        let current = this.head;
        let pointer = 0;

        while(pointer < position - 1) {
            current = current.next;
            pointer++;
        }
        current.next = current.next.next;
        this.length--;
        return this;
    }
}

module.exports = LinkedList;