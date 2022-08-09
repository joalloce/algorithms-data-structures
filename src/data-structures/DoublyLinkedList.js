// List Node definition
function ListNode(x) {
  this.value = x;
  this.prev = null;
  this.next = null;
}

class DoublyLinkedList {
  add(value) {
    let newNode = new ListNode(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  init() {
    this.head = new ListNode("A");

    let b = new ListNode("B");
    b.prev = this.head;
    this.head.next = b;

    let c = new ListNode("C");
    c.prev = b;
    b.next = c;

    let d = new ListNode("D");
    c.next = d;
    d.prev = c;

    this.tail = d;

    return this.head;
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

  print(node) {
    let p = node;
    let end = null;
    let result = "";

    while (p) {
      result = result + p.value + ", ";
      end = p;
      p = p.next;
    }

    result = result + "end";

    console.log(result);

    console.log("Reverse:");

    p = end;
    result = "";

    while (p) {
      result = result + p.value + ", ";
      p = p.prev;
    }

    result = result + "end";
    console.log(result);
  }

  remove(position) {
    let p = this.head;
    let i = 0;

    while (p.next && i < position - 1) {
      p = p.next;
      i++;
    }
    var temp = p.next;
    p.next = p.next.next;
    p.next.prev = p;
    temp.next = null;
    temp.prev = null;
  }
}

export default DoublyLinkedList;
