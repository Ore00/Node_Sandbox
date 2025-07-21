const ListNode = require("./ListNode");

class SingleLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    add(value) {
        let node = new ListNode(value);
        let pointer = null;
        
        if(this.head == null) {
            this.head = node;
        } else {
            pointer = this.head;

            while(pointer.next != null) {
                pointer = pointer.next;
            }
            pointer.next = node;
        }
    }

    clear() {
        this.head = null;
    }
  
    first() {
        return this.head;
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
        if (position < 1) return;
        let node = new ListNode(data);

        if(position === 1) {
            node.next = this.head;
            this.head = node;
            return this;
        }

        let current = this.head;
        let pointer = 1;

        while(current && pointer < position -1) {
            pointer++;
            current = current.next;
        }
        if(current) {
            node.next = current.next;
            current.next = node;
        }
        return this;
    
    }

    last() {
        let node = this.head;
        while(node.next) {
            node = node.next;
        }
        return node;
    }

    remove(data) {
        if(!this.head || data === null) return null;

        if(this.head.data === data) {
            this.head = this.head.next;
            return this;
        }

        let current = this.head;

        while(current.next) {

            if(current.next.data === data) {
                current.next = current.next.next;
                return this;
            }
            
            current = current.next;
        }

        return null;
    }

    removeAt(position) {
        if(position < 0) return null;

        if(position === 0) {
            this.head = this.head.next;
            return this;
        }

        let pointer = 0;
        let current = this.head;

        while(pointer < position - 1) {
            current = current.next;
            pointer++;
        }
        current.next = current.next.next;
        return null;
    }
    
    size() {
        let count = 0;
        let node = this.head;
        while(node) {
            count++;
            node = node.next;
        }
        return count;
    }
}

module.exports = SingleLinkedList;