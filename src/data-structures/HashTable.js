// Node definition
function Node(x) {
  this.value = x;
  this.key = null;
  this.hash = null;
  this.next = null;
}
class HashTable {
  constructor() {
    this.capacity = 16;
    this.table = new Array(this.capacity);
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }
  hashCode(key) {
    let average = (this.hash(key) * (Math.pow(5, 0.5) - 1)) / 2;
    let numeric = average - Math.floor(average);
    return parseInt(Math.floor(numeric * this.table.length));
  }

  put(key, value) {
    if (!key) {
      return null;
    }
    var hash = this.hashCode(key);
    let newNode = new Node(value);
    newNode.key = key;
    newNode.hash = hash;

    let node = this.table[hash];
    while (node) {
      if (node.key === key) {
        node.value = value;
        return;
      }
      node = node.next;
    }
    newNode.next = this.table[hash];
    this.table[hash] = newNode;
    this.size++;
  }

  get(key) {
    if (!key) {
      return null;
    }
    let hash = this.hashCode(key);
    let node = this.table[hash];
    while (node) {
      if (node.key === key) {
        return node.value;
      }
      node = node.next;
    }
    return null;
  }
}
export default HashTable;
