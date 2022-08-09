const binarySearch = (array, searchValue) => {
  let low = 0;
  let high = array.length - 1;
  let mid = 0;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (array[mid] === searchValue) {
      return mid;
    } else if (array[mid] < searchValue) {
      low = mid + 1;
    } else if (array[mid] > searchValue) {
      high = mid - 1;
    }
  }
  return -1;
};

export default binarySearch;
