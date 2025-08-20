const chai = require("chai");
const assert = chai.assert;
const { addNode, deleteDups, deleteDuplicates, ListNode, 
    mergeList, removeAt, reverseList, rotateList, 
    toArray, toList } = require("../../controllers/helpers/LinkedList");
const SingleLinkedList = require("../../models/LinkedList");

suite("Unit Tests", () => {
    suite("Helpers for List Node", () => {
        test("Adding Nodes", function (done) {
            let list = new SingleLinkedList();
            list = addNode(list, 10);
            list = addNode(list, 20);
            assert.equal(list.getData(","), "10,20");
            done();
        });

        test("Array to LinkedList", function (done) {
            let testList = toList([-3,-1,1]);  
            let testData = {data: -3, next: {data: -1, next: {data: 1, next: null}}}; 
            assert.deepEqual(testList, testData);
            done();
        });

        test("LinkedList to Array", function (done) {
            let testList = {data: -3, next: {data: -1, next: {data: 1, next: null}}}; 
            let arr = toArray(testList);
            assert.equal(Array.isArray(arr), true);
            assert.deepEqual(arr, [-3,-1,1]);
            done();
        });
    
        test("Removing Nodes", function (done) {
            let list = new SingleLinkedList();
            list = addNode(list, 10);
            list = addNode(list, 20);
            list = addNode(list, 10);
            list = addNode(list, 20);
            list = removeAt(list, 0);
            assert.equal(list.getData(","), "20,10,20");

            list = addNode(list, 30);
            list = addNode(list, 40);

            list = removeAt(list, 2);
            assert.equal(list.getData(","), "20,10,30,40");

            done();
        });

        test("Remove duplicates from sorted list", function (done) {
            let list = new SingleLinkedList();
            list.add(10);
            list.add(10);
            list.add(20);
            list.add(30);
            list.add(30);
            list.add(40);
            list.add(50);
            list.add(50);
            let result = deleteDuplicates(list.head);
            assert.equal(result.getData(","), "10,20,30,40,50");
            done();
        });
        test("Remove duplicates from sorted list in place", function (done) {
            let list = new SingleLinkedList();
            let results = new SingleLinkedList();
            list.add(0);
            list.add(10);
            list.add(10);
            list.add(20);
            list.add(30);
            list.add(30);
            list.add(40);
            list.add(50);
            list.add(50);
            results.add(0);
            results.add(10);
            results.add(20);
            results.add(30);
            results.add(40);
            results.add(50);
            let result = deleteDups(list.head);
            assert.deepEqual(result, results.head);
            done();
        });      
    });
    suite("Merge array of sorted list nodes", () => {
        test("returns empty listnode when array is empty", function (done) {
            let empty = new ListNode();
            assert.deepEqual(mergeList([]), empty.next);
            done();
        });
        test("returns empty list when array has an empty list", function (done) {
            let testList = new ListNode();
            let empty = new ListNode();
            testList = testList.next;
            assert.deepEqual(mergeList([testList]), empty.next);
            done();
        });

        test("returns list with one ListNode", function (done) {
            let testList = new ListNode(1);
            assert.deepEqual(mergeList([testList]), testList);
            done();
        });
        test("returns merged array of lists", function (done) {
            let a = new ListNode(1, {data: 4, next: {data: 5, next: null}});
            let b = new ListNode(1, {data: 3, next: {data: 4, next: null}});
            let c = new ListNode(2, {data: 6, next: null});
            let lists = [a, b, c];
            let validResults = toList([1,1,2,3,4,4,5,6]);
            let result = mergeList(lists);
            assert.deepEqual(result, validResults);
                
            done();
        });
        test("returns merged array of lists when one list is null", function (done) {
            let empty = new ListNode();
            empty = empty.next;
            let a = new ListNode(1, {data: 4, next: {data: 5, next: null}});
            let b = new ListNode(-1, {data: 3, next: {data: 4, next: null}});
            let c = new ListNode(2, {data: 6, next: null});
            let lists = [empty, a, b, c];
            
            let validResults = toList([-1,1,2,3,4,4,5,6]);
           
             let result = mergeList(lists);
             assert.deepEqual(result, validResults);
                
            done();
        });
        test("returns merged array of lists when primary list has negative number(s)", function (done) {
            let a = new ListNode(-3, {data: 1, next: {data: 4, next: {data: 5, next: null}}});
            let b = new ListNode(1, {data: 3, next: {data: 4, next: null}});
            let c = new ListNode(2, {data: 6, next: null});
            let lists = [a, b, c];
            let validResults = toList([-3,1,1,2,3,4,4,5,6]);
            let result = mergeList(lists);
            assert.deepEqual(result, validResults);
                
            done();
        });
    });

    suite("Rotate LinkedList", () => {

        test("by X at a time", function (done) {
            let list, result;
            
            list = toList([1,2,3,4,5]);
            result = rotateList(list, 2);
            assert.equal(true, true);
            assert.deepEqual(result, toList([4,5,1,2,3]));

            list = toList([0,1,2]);
            result = rotateList(list, 4);
            assert.deepEqual(result, toList([2,0,1]));
            

            list = toList([0,1,2]);
            result = rotateList(list, 0);
            assert.deepEqual(result, toList([0,1,2]));

            list = toList([0,1,2])
            result = rotateList(list, -5)
            assert.deepEqual(result, toList([0,1,2]));
            done();
        });
    });

    suite("Reverse a LinkedList", () => {
        test("to read starting with the last element", function (done) {
            let list = toList([1,2,3,4,5]);
            let result = reverseList(list, 2);
            assert.deepEqual(result, toList([5,4,3,2,1]));

            list = toList(["one","two","three","four","five"]);
            result = reverseList(list, 2);
            assert.deepEqual(result, toList(["five","four","three","two","one"]));
            done();
        });
    });
});

