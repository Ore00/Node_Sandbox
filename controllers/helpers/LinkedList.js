const listNode = require("../../models/ListNode");
const SingleLinkedList = require("../../models/SingleLinkedList");

/**
 * Add a List Node to a Linked List
 * @param {LinkedList} list to modify
 * @param {string|number} value to add to list
 * @returns modified LinkedList
 */
const addNode = (list, value) => {
    let node = new listNode(value);
    
    let pointer = null;
    if(list.head == null) {
        list.head = node;
    } else {
        pointer = list.head;

        while(pointer.next != null) {
            pointer = pointer.next;
        }
        pointer.next = node;
    }
    return list;
}

/**
 * Creates a copy of a linked list
 * @param {LinkedList} head
 * @returns {LinkedList} a copy of the linked list
 */
const copyList = (head) => {
    if(head == null) {
        return head;
    }

    let newNode = new listNode(head.data);

    newNode.next = copyList(head.next);

    return newNode;
}

/**
 * Create Linked List from an array of Numbers
 * @param {LinkedList} list this will be used as the linked-list
 * @param {String|Number[]} arr this is the array of values to add to the linked-list
 * @returns LinkedList that has all values of the array
 */
const createList = (list, arr) => {
    arr.forEach(element => list = addNode(list, element) );
    return list;
}

/** 
 * Remove duplicates from a Sorted Linked List in place
 * @param {LinkedList} head
 * @returns head of LinkedList without the duplicates
*/
const deleteDups = (head) => {
    if(head === null) return null;
    let current = head;

    while(current.next) {
        if(current.next.data == current.data) {
            //if current value equals the next value
            //set the next node, so that it skips one node
            current.next = current.next.next;
            //exit loop and move on to the next node
            continue;
        }
        current = current.next;
    }
    return head;
}

/**
 * Remove duplicates from a Linked List
 * @param {LinkedList} head 
 * @returns a new Single Linked List with unique values
 */
const deleteDuplicates = (head) => {
    if(head === null) return null;
    let current = head;
    let results = new SingleLinkedList();
    let left;

    while(current !== null) {
        if( left == null || (left != null && current.data != left.data)) {
            results = addNode(results, current.data);
        }
        
        left = current;
        current = current.next;
    }
    return results;

}
/**
 * Get Data (values) from a linked list with a specified delimiter
 * @param {LinkedList} head - This is the head of a LinkedList
 * @param {string} [delimiter="\n"] - This is the character(s) to seperate values by
 * @returns 
 */
const getData = (head, delimiter = "\n") => {
    let current = head;
    let str = "";

    while(current) {
        str = current.next != null ? str.concat(current.data, delimiter) :str.concat(current.data);
        current = current.next;
    }
    return str
}
/**
 * Singly Linked List definition typically used in online coding tests
 * @param {string|number} data - The value of the Node
 * @param {ListNode|null} next  - Points to the next Node in the list
 */
function ListNode (data, next)  {
    this.data = (data === undefined ? 0 : data);
    this.next = (next === undefined ? null : next);
}

/**
 * Merges an array of sorted ListNode
 * @param {ListNode[]} lists - This is an array of LinkedList
 * @returns lists with the list nodes consolidated in ascending order
 */
const mergeList = (lists) => {

    //if less than 1 linked list in the array return empty lists
    const empty = new ListNode();
    if(lists.length < 1 || lists.length == undefined) return empty.next;
    
    const arr = lists.flatMap(toArray).sort((a,b) => a - b );
   
    return toList(arr);
}

/**
 * Remove a ListNode by it's location (index)
 * @param {LinkedList} head - This is the head of a LinkedList
 * @param {number} index - This is the location of the ListNode to remove
 * @returns 
 */
const removeAt = (list, index) => {
    if(index < 0) return null;

    if (index === 0) {
        list.head = list.head.next;
        return list;
    }

    let pointer = 0;
    let current = list.head;

    while(pointer < index -1) {
        current = current.next;
        pointer++;
    }
    current.next = current.next.next;
    return list;
}

/**
 * Reverse a LinkedList of ListNodes 
 * @param {LinkedList} head 
 * @param {Number} X
 * @returns the LinkedList where the ListNodes have been reversed "5,4,3,2,1"
 */
const reverseList = (head) => {
    let pointer = null, current = head, next;

    while(current !== null) {
        //save the current value
        next = current.next;

        //reverse current next's to pointer
        current.next = pointer;

        //move pointer by one
        pointer = current;
        current = next;

    }
    return pointer; 
}

/**
 * Rotate a LinkedList of ListNodes by X
 * @param {LinkedList} head 
 * @param {Number} X
 * @returns the LinkedList where the ListNodes have rotated X times
 */
const rotateList = (head, X) => {

    if(X <= 0 ) return head;

    let pointer = null, curser = null, listSize = 0, current = head, rotateRight = X;

    //Determine size of list
    while (current) {
        listSize++;
        current = current.next;
    }

    //Make circular list so we can navigate back to the first node
    current = head;

    //When the number of rotations is greater than the list size
    //Set rotateRight to the remainder of (listSize / X) 
    rotateRight = X > listSize ? X  % listSize : X;
 
    //When the number of rotations equals zero return head
    if (rotateRight == 0) return head;


    //using the current pointer rotate to the right of the list
    while(rotateRight > 0 ) {
        current = current.next;
    
        rotateRight--;  
    }
    
    //set next pointer include the remaining values in the list
    pointer = current.next;

    //remove the remaining values in the list from the current pointer
    current.next = null;
    
    curser = pointer;
    while(curser.next !== null) {
        curser = curser.next;
    }

    //add unchanged values to end of list
    curser.next = head;

    return pointer;
}

/**
 * Count the number of ListNodes in a given linked-list
 * @param {LinkedList} list this is the linked-list of nodes
 * @returns the number of nodes within a list
 */
const size = (list)  => {
    let count = 0;

    if(list  == null) return count;

    let node = list.head !== undefined? list.head : list;
    while(node) {
        count++;
        node = node.next;
    }
    return count;
}

/**
 * Convert a LinkedList of ListNode(s) to an Array
 * @param {LinkedList} list this is the list that will be converted
 * @returns this returns an array of the values within the linked-list
 */

const toArray = (list) =>  {
    return list === null ? [] : [list.data, ...toArray(list.next)];
}

/**
 * Convert an array to a LinkedList using ListNode(s)
 * @param {Number[]} arr the array to convert to a LinkedList with ListNode
 * @returns {ListNode} a LinkedList of ListNodes
 */
const toList = (arr) => {
    return arr.reduceRight((acc, val) => new ListNode(val, acc), null);
}

exports.addNode = addNode;
exports.copyList = copyList;
exports.createList = createList;
exports.deleteDups = deleteDups;
exports.deleteDuplicates = deleteDuplicates;
exports.getData = getData;
exports.ListNode = ListNode;
exports.mergeList = mergeList;
exports.removeAt = removeAt;
exports.reverseList = reverseList;
exports.rotateList = rotateList;
exports.size = size;
exports.toArray = toArray;
exports.toList = toList;