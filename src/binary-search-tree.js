const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let currentNode = this.rootNode;

    while (currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      } else {
        return;
      }
    }
  }

  has(data) {
    const node = this.find(data);
    if (node !== null) {
      return true;
    } else {
      return false; 
    }
  }

  find(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    const deleteNode = (node, data) => {
      if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      }

      if (data > node.data) {
        node.right = deleteNode(node.right, data);
        return node;
      }

      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let replacement = node.right;
      let replacementParent = node;

      while (replacement.left) {
        replacementParent = replacement;
        replacement = replacement.left;
      }

      node.data = replacement.data;

      if (replacementParent.left === replacement) {
        replacementParent.left = replacement.right;
      } else {
        replacementParent.right = replacement.right;
      }

      return node;
    };

    this.rootNode = deleteNode(this.rootNode, data);
  }

  min() {
    let current = this.rootNode;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.rootNode;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}


module.exports = {
  BinarySearchTree,
};

