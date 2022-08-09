// List Node definition
function ListNode(x) {
  this.value = x;
  this.next = null;
}

class SinglyLinkedList {
  add(value) {
    let newNode = new ListNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
  }

  init() {
    this.head = new ListNode("A");

    let b = new ListNode("B");
    this.head.next = b;

    let c = new ListNode("C");
    b.next = c;

    let d = new ListNode("D");
    c.next = d;

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
  }

  print(node) {
    let p = node;
    let result = "";

    while (p) {
      result = result + p.value + ", ";
      p = p.next;
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

    let temp = p.next;
    p.next = p.next.next;
    temp.next = null;
  }
}

export default SinglyLinkedList;
