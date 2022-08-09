import {
  binarySearch,
  bubbleSort,
  dijkstra,
  factorial,
  fibonacci,
  hanoi,
  insertSort,
  mergeSort,
  mouseWalkingMaze,
  quickSort,
  selectSort,
  shellSort,
} from "./algorithms";
import {
  BinaryHeapSortTree,
  BinarySearchTree,
  DoublyLinkedList,
  OneWayCircularLinkedList,
  Queue,
  SinglyLinkedList,
  Stack,
  TwoWayCircularLinkedList,
  HashTable,
} from "./data-structures";

// Bubble Sort
console.log("Bubble Sort:");
console.log(bubbleSort([1, 5, 3, 2, 4]));
// Select Sort
console.log("Select Sort:");
console.log(selectSort([1, 5, 3, 2, 4]));
// Insert Sort
console.log("Insert Sort:");
console.log(insertSort([1, 5, 3, 2, 4]));
// Binary Search
console.log("Binary Serach:");
console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));

// Singly Linked List
let singlyLinkedList = new SinglyLinkedList();
let head = singlyLinkedList.init();
console.log("Singly Linked List:");
singlyLinkedList.print(head);

// add value "E"
singlyLinkedList.add("E");
console.log("SLL add:");
singlyLinkedList.print(head);

// insert "1" at position 3
singlyLinkedList.insert("1", 3);
console.log("SLL insert:");
singlyLinkedList.print(head);

// remove the value at position 3
singlyLinkedList.remove(3);
console.log("SLL remove:");
singlyLinkedList.print(head);

// Doubl eLinked List
let doublyLinkedList = new DoublyLinkedList();
head = doublyLinkedList.init();
console.log("Doubly Linked List:");
doublyLinkedList.print(head);

// add value "E"
doublyLinkedList.add("E");
console.log("DLL add:");
doublyLinkedList.print(head);

// insert "1" at position 3
doublyLinkedList.insert("1", 3);
console.log("DLL insert:");
doublyLinkedList.print(head);

// remove the value at position 3
doublyLinkedList.remove(3);
console.log("DLL remove:");
doublyLinkedList.print(head);

// One-way Circular Linked List
let oneWayCircularLinkedList = new OneWayCircularLinkedList();
oneWayCircularLinkedList.init();
console.log("One-way Circular Linked List:");
oneWayCircularLinkedList.print();

// insert "1" at position 3
oneWayCircularLinkedList.insert("1", 3);
console.log("OWCLL insert:");
oneWayCircularLinkedList.print();

// remove the value at position 3
oneWayCircularLinkedList.remove(3);
console.log("OWCLL remove:");
oneWayCircularLinkedList.print();

// Two-way Circular Linked List
let twoWayCircularLinkedList = new TwoWayCircularLinkedList();
twoWayCircularLinkedList.init();
console.log("Two-way Circular Linked List:");
twoWayCircularLinkedList.print();

// insert "1" at position 3
twoWayCircularLinkedList.insert("1", 3);
console.log("TWCLL insert:");
twoWayCircularLinkedList.print();

// remove the value at position 3
twoWayCircularLinkedList.remove(3);
console.log("WWCLL remove:");
twoWayCircularLinkedList.print();

// Queue
let queue = new Queue();
queue.offer("A");
queue.offer("B");
queue.offer("C");
queue.offer("D");
console.log("Queue:");
queue.print();

// poll
console.log(`Queue poll ${queue.poll().value}:`);
queue.print();
console.log(`Queue poll ${queue.poll().value}:`);
queue.print();

// Stack
let stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");
console.log("Stack:");
stack.print();

// pop
console.log(`Stack pop ${stack.pop().value}:`);
stack.print();
console.log(`Stack pop ${stack.pop().value}:`);
stack.print();

// factorial
console.log("Factorial of 5 is:", factorial(5));

// mergeSort
console.log("MergeSort:", mergeSort([50, 65, 99, 87, 74, 63, 76, 100, 92, 30]));

// quickSort
console.log("QuickSort:", quickSort([50, 65, 99, 87, 74, 63, 76, 100, 92, 30]));

// Binary Search Tree
let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(binarySearchTree.getRoot(), 60);
binarySearchTree.insert(binarySearchTree.getRoot(), 40);
binarySearchTree.insert(binarySearchTree.getRoot(), 20);
binarySearchTree.insert(binarySearchTree.getRoot(), 10);
binarySearchTree.insert(binarySearchTree.getRoot(), 30);
binarySearchTree.insert(binarySearchTree.getRoot(), 50);
binarySearchTree.insert(binarySearchTree.getRoot(), 80);
binarySearchTree.insert(binarySearchTree.getRoot(), 70);
binarySearchTree.insert(binarySearchTree.getRoot(), 90);

// traversal
console.log("In-order traversal:");
binarySearchTree.inOrder(binarySearchTree.getRoot());
console.log("Pre-order traversal:");
binarySearchTree.preOrder(binarySearchTree.getRoot());
console.log("Post-order traversal:");
binarySearchTree.postOrder(binarySearchTree.getRoot());

// max and min
console.log(
  "min value is:",
  binarySearchTree.searchMinValue(binarySearchTree.getRoot()).value
);
console.log(
  "max value is:",
  binarySearchTree.searchMaxValue(binarySearchTree.getRoot()).value
);

//remove
console.log("remove node 10:");
binarySearchTree.remove(binarySearchTree.getRoot(), 10);
binarySearchTree.inOrder(binarySearchTree.getRoot());
console.log("remove node 20:");
binarySearchTree.remove(binarySearchTree.getRoot(), 20);
binarySearchTree.inOrder(binarySearchTree.getRoot());
console.log("remove node 40:");
binarySearchTree.remove(binarySearchTree.getRoot(), 40);
binarySearchTree.inOrder(binarySearchTree.getRoot());

// Binary Heap Sort Tree
let binaryHeapSortTree = new BinaryHeapSortTree();
console.log("Heapsort");
console.log("Elements:", [10, 90, 20, 80, 30, 70, 40, 60, 50]);
//Building Heap
binaryHeapSortTree.createHeap([10, 90, 20, 80, 30, 70, 40, 60, 50]);
console.log("Building heap:", binaryHeapSortTree.array);
binaryHeapSortTree.heapSort();
console.log("After sorting:", binaryHeapSortTree.array);

// HashTable
let hashTable = new HashTable();
hashTable.put("David", "hey");
hashTable.put("Daniela", "heya");
hashTable.put("Marco", "Jojo");
console.log("Hashtable");
console.log("get 'David' in hashtable", hashTable.get("David"));
console.log("get 'Daniela' in hashtable", hashTable.get("Daniela"));
console.log("get 'Marco' in hashtable", hashTable.get("Marco"));

// Shell Sort
console.log("Shell Sort");
console.log(shellSort([9, 6, 5, 8, 0, 7, 4, 3, 1, 2]));

// Hanoi
console.log("Tower of Hanoi");
console.log("n = 1");
hanoi(1, "A", "B", "C");
console.log("n = 2");
hanoi(2, "A", "B", "C");
console.log("n = 3");
hanoi(3, "A", "B", "C");

// Fibonacci
console.log("Fibonacci");
console.log("Fibonacci f(1):", fibonacci(1));
console.log("Fibonacci f(2):", fibonacci(2));
console.log("Fibonacci f(3):", fibonacci(3));
console.log("Fibonacci f(4):", fibonacci(4));
console.log("Fibonacci f(5):", fibonacci(5));
console.log("Fibonacci f(6):", fibonacci(6));
console.log("Fibonacci f(7):", fibonacci(7));

// Dijstra
console.log("Dijkstra");
let flags = ["R", "B", "W", "B", "R", "W"];
console.log("Flags:", flags);
dijkstra(flags);
console.log(flags);

// Mouse Walking Maze
let maze = [
  [2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 0, 2],
  [2, 2, 2, 0, 2, 0, 2],
  [2, 0, 2, 0, 0, 2, 2],
  [2, 2, 0, 2, 0, 2, 2],
  [2, 0, 0, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 2],
];
console.log("Mouse Walking Maze");
console.log(maze);
const sucess = mouseWalkingMaze({
  maze,
  startI: 1,
  startJ: 1,
  endI: 5,
  endJ: 5,
});
console.log(sucess, maze);
