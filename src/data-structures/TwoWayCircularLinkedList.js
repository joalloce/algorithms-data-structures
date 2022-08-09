// List Node definition
function ListNode(x) {
  this.value = x;
  this.prev = null;
  this.next = null;
}

class TwoWayCircularLinkedList {
  init() {
    this.head = new ListNode("A");

    let b = new ListNode("B");
    b.prev = this.head;
    this.head.next = b;

    let c = new ListNode("C");
    c.prev = b;
    b.next = c;

    let d = new ListNode("D");
    this.tail = d;
    this.tail.next = this.head;
    this.tail.prev = c;
    c.next = this.tail;
    this.head.prev = this.tail;
  }

  insert(value, position) {
    let p = this.head;
    let i = 0;
    while (p.next && i < position - 1) {
      p = p.next;
      i++;
    }
    let newNode = new ListNode(value);
    newNode.next = p.next;
    p.next = newNode;
    newNode.prev = p;
    newNode.next.prev = newNode;
  }

  print() {
    let p = this.head;
    let result = "";

    do {
      result = result + p.value + ", ";
      p = p.next;
    } while (p != this.head);

    result = result + p.value;

    console.log(result);

    console.log("Reverse:");

    p = this.tail;
    result = "";

    do {
      result = result + p.value + ", ";
      p = p.prev;
    } while (p != this.tail);

    result = result + p.value;
    console.log(result);
  }

  remove(position) {
    let p = this.head;
    let i = 0;

    while (p.next && i < position - 1) {
      p = p.next;
      i++;
    }

    let temp = p.next;
    p.next = p.next.next;
    p.next.prev = p;
    temp.next = null;
    temp.prev = null;
  }
}

export default TwoWayCircularLinkedList;
