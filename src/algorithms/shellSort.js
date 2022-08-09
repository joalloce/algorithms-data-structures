const shellSort = (array) => {
  const swap = (arr, a, b) => {
    arr[a] = arr[a] + arr[b];
    arr[b] = arr[a] - arr[b];
    arr[a] = arr[a] - arr[b];
  };

  let mid = parseInt(array.length / 2);
  for (let gap = mid; gap > 0; gap = parseInt(gap / 2)) {
    for (let i = gap; i < array.length; i++) {
      let j = i;
      while (j - gap >= 0 && array[j] < array[j - gap]) {
        swap(array, j, j - gap);
        j = j - gap;
      }
    }
  }
  return array;
};

export default shellSort;
