function multi(arr) {
  let max = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      for (k = j + 1; k < arr.length; k++) {
        if (arr[i] * arr[j] * arr[k] > max) {
          max = arr[i] * arr[j] * arr[k];
        }
      }
    }
  }
  return max;
}
module.exports = multi;
