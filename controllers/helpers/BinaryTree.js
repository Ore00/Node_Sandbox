const treeNode = require("../../models/BinaryTree");
/**
 * Binary tree node
 * @param {number|string} data this.val = (val===undefined ? 0 : val)
 * @param {number|string|null} left this.left = (left===undefined ? null : left)
 * @param {number|string|null} right this.right = (right===undefined ? null : right)
 */
const TreeNode = (val, left, right) => {
    this.data = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * Creates a TreeNode within a Binary Tree
 * @param {treeNode | null} root 
 * @param {Number} val 
 * @returns binary tree node(s)
 */
const create = (root, val, allowNulls = false) => {

    if (!allowNulls && val == null) return;
    let current = null, newNode = new treeNode(val), placement;

    if (!root) {
        root = newNode;
        return root;
    }

    current = root;

    // while (true) {
    while (current) {

        if (current.data == val) {
            return root;
        }

        placement = val < current.data ? 'left' : 'right';
        if (!current[placement]) {
            current[placement] = newNode;
            current = current[placement]
            return root;
        } else {
            current = current[placement]
        }

    }

}

/**
 * Inorder transversal of a Binary Tree
 * @param {TreetNode[]} root is a TreeNode
 * @returns {[]} array of the values of a Tree Node
 */
const inOrderTransversal = (root, withNulls = false) => {
    if (root == null) return;
    let queque = [];

    let move = (node) => {
        if (node.left) move(node.left);
        if (withNulls) {
            queque.push(node.data);
        } else {
            if (node.data != null) queque.push(node.data);
        }
        if (node.right) move(node.right);
    }

    move(root);
    return queque;
}

/**
 * Post order transversal of a Binary Tree
 * @param {treeNode[]} root is a TreeNode
 * @returns {[]} array of the values of a Tree Node
 */
const preOrderTransversal = (root) => {
    if (root == null) return;
    let queque = [];

    let move = (node) => {
        if (node.data != null) queque.push(node.data);
        if (node.left) move(node.left);
        if (node.right) move(node.right);
    }

    move(root);
    return queque;
}
/**
 * Post order transversal of a Binary Tree
 * @param {treeNode[]} root is a TreeNode
 * @returns {[]} array of the values of a Tree Node
 */
const postOrderTransversal = (root) => {
    if (root == null) return;
    let queque = [];

    let move = (node) => {
        if (node.left) move(node.left);
        if (node.right) move(node.right);
        if (node.data != null) queque.push(node.data);
    }

    move(root);
    return queque;
}

/**
 * Get the values of a Binary Tree
 * @param {*} root Binary Tree root
 * @returns 
 */
const print = (root, withNulls = false) => {
    if (root == null) return;
    let result = [], current = root;

    let getValues = (node) => {
        if (withNulls && node.data == null) result.push(node.data);
        if (node.data != null) result.push(node.data);
        if (node.left) getValues(node.left);
        if (node.right) getValues(node.right);

    }

    getValues(current);
    return result;
}

exports.create = create;
exports.TreeNode = TreeNode;
exports.inOrderTransversal = inOrderTransversal;
exports.postOrderTransversal = postOrderTransversal;
exports.preOrderTransversal = preOrderTransversal;
exports.print = print;