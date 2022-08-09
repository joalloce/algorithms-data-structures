// List Node definition
function ListNode(x) {
  this.value = x;
  this.next = null;
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    if (!this.top) {
      this.top = new ListNode(value);
    } else {
      let newNode = new ListNode(value);
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    let p = this.top;
    this.top = this.top.next;
    p.next = null;

    this.size--;
    return p;
  }

  print() {
    let p = this.top;
    let result = "";

    while (p) {
      result = result + p.value + ", ";
      p = p.next;
    }

    result = result + "end";
    console.log(result);
  }
}

export default Stack;
