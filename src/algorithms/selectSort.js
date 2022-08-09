const selectSort = (array) => {
  let length = array.length;
  let minIndex;
  for (let i = 0; i < length; i++) {
    minIndex = i;
    let minValue = array[minIndex];
    for (let j = i; j < length; j++) {
      if (minValue > array[j + 1]) {
        minValue = array[j + 1];
        minIndex = j + 1;
      }
    }
    if (i != minIndex) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
};

export default selectSort;
