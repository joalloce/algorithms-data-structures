// List Node definition
function ListNode(x) {
  this.value = x;
  this.prev = null;
  this.next = null;
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  offer(value) {
    if (!this.head) {
      this.head = new ListNode(value);
      this.tail = this.head;
    } else {
      let newNode = new ListNode(value);
      newNode.next = this.tail;
      this.tail.prev = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  poll() {
    let p = this.head;
    if (!p) {
      return null;
    }

    this.head = this.head.prev;
    p.next = null;
    p.prev = null;

    this.size--;

    return p;
  }

  print() {
    let p = this.head;
    let result = "";

    while (p) {
      result = result + p.value + ", ";
      p = p.prev;
    }

    result = result + "end";
    console.log(result);
  }
}

export default Queue;
