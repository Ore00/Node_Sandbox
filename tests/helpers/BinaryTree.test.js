const chai = require("chai");
const assert = chai.assert;
const helpers = require("../../controllers/helpers/BinaryTree")

suite("Unit Tests", () => {
    suite("Binary Tree Helpers", () => {
        test("create a binary tree node", function (done) {
            let arr = [1, null, 3, 2];
            let tree = null;
            arr.forEach((val) => {
                let current = helpers.create(tree, val, true);
                tree = current;
            });

            assert.equal(tree.data, arr[0]);
            assert.equal(tree.left.data, arr[1]);
            assert.equal(tree.right.data, arr[2]);
            assert.equal(tree.right.left.data, arr[3]);
            assert.deepEqual(helpers.print(tree, true), arr);
            done();
        });
        test("inorder transverse of a binary tree", function (done) {
            let arr = [19, 13, 56, 8, 18, 30, 61, 2, 10, 71];
            let tree = null;
            arr.forEach((val) => {
                let current = helpers.create(tree, val);
                tree = current;
                // helpers.create(tree, val);
            });
            assert.deepEqual(helpers.inOrderTransversal(tree), [2, 8, 10, 13, 18, 19, 30, 56, 61, 71]);
            done();
        });
        test("preorder transverse of a binary tree", function (done) {
            let arr = [21, 15, 58, 10, 20, 32, 63, 4, 12, 73];
            let tree = null;
            arr.forEach((val) => {
                let current = helpers.create(tree, val);
                tree = current;
            });
            assert.deepEqual(helpers.preOrderTransversal(tree), [21, 15, 10, 4, 12, 20, 58, 32, 63, 73]);
            done();
        });

        test("postorder transverse of a binary tree", function (done) {
            let arr = [22, 16, 59, 11, 21, 33, 64, 5, 13, 74];
            let tree = null;
            arr.forEach((val) => {
                let current = helpers.create(tree, val);
                tree = current;
            });
            assert.deepEqual(helpers.postOrderTransversal(tree), [5, 13, 11, 21, 16, 33, 74, 64, 59, 22]);
            done();
        });
    });
});

