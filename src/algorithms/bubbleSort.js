const bubbleSort = (array) => {
  let length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (array[j] > array[j + i]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

export default bubbleSort;
