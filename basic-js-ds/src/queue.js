const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

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
    this.queue = [];
  }
  
  getUnderlyingList() {
    const createList = (arr) => {
      let head = null;
      let current = null;
      
      arr.forEach((value) => {
        const newNode = { value, next: null };
        if (!head) {
          head = newNode;
          current = head;
        } else {
          current.next = newNode;
          current = newNode;
        }
      });

      return head;
    };

    return createList(this.queue);
  }

  enqueue(value) {
    return this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }
}

module.exports = {
  Queue,
};
