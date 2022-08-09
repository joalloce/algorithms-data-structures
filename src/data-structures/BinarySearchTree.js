// Node definition
function Node(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

class BinarySearchTree {
  getRoot() {
    return this.root;
  }

  inOrder(root) {
    if (!root) {
      return;
    }
    this.inOrder(root.left);
    console.log(root.value);
    this.inOrder(root.right);
  }

  insert(node, value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    let compareValue = value - node.value;
    if (compareValue < 0) {
      if (!node.left) {
        node.left = new Node(value);
      } else {
        this.insert(node.left, value);
      }
    } else if (compareValue > 0) {
      if (!node.right) {
        node.right = new Node(value);
      } else {
        this.insert(node.right, value);
      }
    }
  }

  searchMaxValue(node) {
    if (!node) {
      return null;
    }
    if (!node.right) return node;
    return this.searchMaxValue(node.right);
  }

  searchMinValue(node) {
    if (!node) {
      return null;
    }
    if (!node.left) return node;
    return this.searchMinValue(node.left);
  }

  postOrder(root) {
    if (!root) {
      return;
    }
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.value);
  }

  preOrder(root) {
    if (!root) {
      return;
    }
    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  remove(node, value) {
    if (!node) {
      return node;
    }
    let compareValue = value - node.value;
    if (compareValue > 0) {
      node.right = this.remove(node.right, value);
    } else if (compareValue < 0) {
      node.left = this.remove(node.left, value);
    } else if (node.left && node.right) {
      node.value = this.searchMinValue(node.right).value;
      node.right = this.remove(node.right, node.value);
    } else {
      if (node.left) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return node;
  }
}

export default BinarySearchTree;
