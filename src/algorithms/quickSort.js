const quickSort = (array) => {
  const qs = (array, low, high) => {
    if (low > high) {
      return;
    }
    let i = low;
    let j = high;
    let threshold = array[low];
    while (i < j) {
      while (i < j && array[j] > threshold) {
        j--;
      }
      if (i < j) {
        array[i++] = array[j];
      }
      while (i < j && array[i] <= threshold) {
        i++;
      }

      if (i < j) {
        array[j--] = array[i];
      }
    }
    array[i] = threshold;

    qs(array, low, i - 1);
    qs(array, i + 1, high);
    return array;
  };

  const sort = (array) => {
    if (array.length > 0) {
      array = qs(array, 0, array.length - 1);
    }
    return array;
  };

  return sort(array);
};

export default quickSort;
