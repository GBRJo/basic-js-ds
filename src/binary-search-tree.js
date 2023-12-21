const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
     this.data = data;
     this.left = null;
     this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
      this._root = null; 
  }

  root() {
      return this._root;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this._root) {
      this._root = newNode;
    } else {
      this._insertNode(this._root, newNode);
    }
  }
  
  _insertNode(node, newNode) {
    if (newNode.data < node.data) { 
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    }
    else if (newNode.data > node.data) { 
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
    }

  has(data) {
   if (!this._root) {
     return false;
   }
   let thisNode = this._root;
   while (thisNode) {
     if (data === thisNode.data) {
       return true;
     }
     else if (data < thisNode.data) {
       thisNode = thisNode.left;
     } else {
       thisNode = thisNode.right;
     }
   } 
   return false;
  } 

  find(data) {
    if (!this._root) {
      return false;
    }
    let thisNode = this._root;
    while (thisNode) {
      if (data === thisNode.data) {
        return thisNode;
      }
      else if (data < thisNode.data) {
        thisNode = thisNode.left;
      } else {
        thisNode = thisNode.right;
      }
    } 
    return null;
   } 
  

  remove(data) {
   this._root = this._removeNode(this._root, data);
    }
  
  _removeNode(thisNode, data) {

    if (thisNode === null && thisNode.left === null && thisNode.right === null) {
      return null;
    }
    if (data === thisNode.data) { 
      if (thisNode.left === null) {
        return thisNode.right
      } else  if (thisNode.right === null) {
        return thisNode.left
      }
    
    const gagNode = this._findGagNode(thisNode.right);
    thisNode.data = gagNode.data;
    thisNode.right = this._removeNode(thisNode.right,gagNode.data);
   return thisNode;
  } else if (data < thisNode.data) {
    thisNode.left = this._removeNode(thisNode.left, data);
    return thisNode;
    } else {
      thisNode.right = this._removeNode(thisNode.right, data);
      return thisNode;
    }
  }

    _findGagNode(thisNode) {
      while (thisNode.left !== null) {
        thisNode = thisNode.left;
    }
    return thisNode;
  }

  min() {
    let thisNode = this._root;
    while (thisNode.left !== null) {
      thisNode = thisNode.left;
    }
    return thisNode.data;
  }

  max() {
    let thisNode = this._root;
    while (thisNode.right !== null) {
      thisNode = thisNode.right;
    }
    return thisNode.data;
  }
}

module.exports = {
  BinarySearchTree
};