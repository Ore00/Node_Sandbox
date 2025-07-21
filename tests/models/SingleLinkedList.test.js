const chai = require("chai");
const assert = chai.assert;
const SingleLinkedList = require("../../models/SingleLinkedList");
const ListNode = require("../../models/ListNode");

suite("Unit Tests", () => {
  suite("Single Linked List", () => {
    test("add node", function (done) {
      let list = new SingleLinkedList();
      assert.equal(list.head, null);
      list.add("first node added");
      assert.equal(list.head.data, "first node added");
      list.add("second node added");
      assert.equal(list.last().data, "second node added");

      done();
    });
    test("clear list", function (done) {
      let node1 = new ListNode(3);
      let node2 = new ListNode(7);
      node1.next = node2;
      let list = new SingleLinkedList(node1);
      list.clear();
      assert.equal(list.head, null);
      done();
    });

    test("creation", function (done) {
      let node1 = new ListNode(3);
      let list = new SingleLinkedList(node1);
      list.add(7);
      assert.equal(list.head.next.data, 7);
      done();
    });

    test("insert node at position", function (done) {
      let list = new SingleLinkedList();
      list.add(10);
      list.add(20);
      list.add(30);
      list.add(40);
      list.add(50);
      list.insertAt(35, 4);
      let result = list.getData(" , ");
      assert.equal(result, "10 , 20 , 30 , 35 , 40 , 50");

      list.insertAt(5, 1);
      assert.equal(list.getData(" , "), "5 , 10 , 20 , 30 , 35 , 40 , 50");

      done();
    });

    test("remove node by value", function (done) {
      let list = new SingleLinkedList();
      list.add(10);
      list.add(20);
      list.add(30);
      list.add(40);
      list.add(50);
      list.remove(10);
      let result = list.getData(" , ");
      assert.equal(result, "20 , 30 , 40 , 50");

      list.remove(40);
      result = list.getData(" , ");
      assert.equal(result, "20 , 30 , 50");

      done();
    });

    test("remove node by position", function (done) {
      let list = new SingleLinkedList();
      list.add(10);
      list.add(20);
      list.add(30);
      list.add(40);
      list.add(50);
      list.removeAt(1);
      let result = list.getData(" , ");
      assert.equal(result, "10 , 30 , 40 , 50");

      list.removeAt(3);
      result = list.getData(" , ");
      assert.equal(result, "10 , 30 , 40");

      list.removeAt(0);
      result = list.getData(" , ");
      assert.equal(result, "30 , 40");

      done();
    });

    test("return the value of first node", function (done) {
      let node1 = new ListNode(3);
      let list = new SingleLinkedList(node1);
      list.add(7);
      list.add(9);
      let first = list.first();
      assert.equal(first.data, 3);
      done();
    });

    test("return the value of the last node", function (done) {
      let node1 = new ListNode(3);
      let node2 = new ListNode(7);
      let node3 = new ListNode(9);
      node1.next = node2;
      node1.next.next = node3;
      let list = new SingleLinkedList(node1);
      let last = list.last();
      assert.equal(last.data, 9);
      done();
    });

    test("return size", function (done) {
      let node1 = new ListNode(3);
      let node2 = new ListNode(7);
      node1.next = node2;
      let list = new SingleLinkedList(node1);
      assert.equal(list.size(), 2);
      done();
    });
  });
});