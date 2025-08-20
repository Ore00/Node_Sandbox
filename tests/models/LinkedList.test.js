const chai = require("chai");
const assert = chai.assert;

const LinkedList = require("../../models/LinkedList");

suite("Unit Tests", () => {
  suite("Linked List", () => {
    test("add a node", function (done) {
      let list = new LinkedList();
      list.add("node test 1");
      assert(list.head.data, "node test 1");
      done();
    });
    test("verify length", function (done) {
      let list = new LinkedList();
      list.add("node test 1");
      list.add("node test 2");
      assert(list.length, 2);
      done();
    });
    test("get data", function (done) {
      let list = new LinkedList();
      list.add("node test 1");
      list.add("node test 2");
      let result = list.getData();

      assert.exists(result, "node test 1\n node test 2\n");
      result = list.getData(";");
      assert.exists(result, "node test 1;node test 2;");

      done();
    });

    test("insert node at position", function (done) {
      let list = new LinkedList();
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
      let list = new LinkedList();
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
      let list = new LinkedList();
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
  });
});