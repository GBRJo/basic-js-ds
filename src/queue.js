const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null; 
    this.tail = null;
  }

  getUnderlyingList() {
  return this.head;
  }

  enqueue(value) {
    const { ListNode } = require('../extensions/list-node.js')
    const newNode = new ListNode(value);
  if (!this.head) {
    this.head = newNode;
  } else {
    this.tail.next = newNode;
  }
  this.tail = newNode;
}
  

  dequeue() {
    if (!this.head) {
      return null;
    }
  
    const currentValue = this.head.value;
    this.head = this.head.next; 
    if (!this.head) { 
      this.tail = null;
    }
    return currentValue;
  }
}

module.exports = {
  Queue
};
