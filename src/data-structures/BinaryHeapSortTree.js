class BinaryHeapSortTree {
  constructor() {
    this.array = [];
  }

  createHeap(array) {
    this.array = array;

    for (let i = (array.length - 1) / 2; i >= 0; --i) {
      this.adjustHeap(i, array.length - 1);
    }
  }

  adjustHeap(currentIndex, maxLength) {
    let noLeafValue = this.array[currentIndex];
    for (
      let j = 2 * currentIndex + 1;
      j <= maxLength;
      j = currentIndex * 2 + 1
    ) {
      if (j < maxLength && this.array[j] < this.array[j + 1]) {
        j++;
      }
      if (noLeafValue >= this.array[j]) {
        break;
      }
      this.array[currentIndex] = this.array[j];
      currentIndex = j;
    }
    this.array[currentIndex] = noLeafValue;
  }
  heapSort() {
    for (let i = this.array.length - 1; i > 0; i--) {
      let temp = this.array[0];
      this.array[0] = this.array[i];
      this.array[i] = temp;
      this.adjustHeap(0, i - 1);
    }
  }
}

export default BinaryHeapSortTree;
