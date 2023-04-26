function bubbleSort(arr) {
  var sortTimes = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var location = arr[i];
        arr[i] = arr[j];
        arr[j] = location;
        sortTimes++;
      }
    }
  }

  return sortTimes;
}
module.exports = bubbleSort;
