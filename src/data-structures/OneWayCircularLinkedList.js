// List Node definition
function ListNode(x) {
  this.value = x;
  this.next = null;
}

class OneWayCircularLinkedList {
  init() {
    this.head = new ListNode("A");

    let b = new ListNode("B");
    this.head.next = b;

    let c = new ListNode("C");
    b.next = c;

    let d = new ListNode("D");
    this.tail = d;
    this.tail.next = this.head;
    c.next = d;
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
    temp.next = null;
  }
}

export default OneWayCircularLinkedList;
