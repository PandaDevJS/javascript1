function sortString(arr) {
  let m = arr.length;
  for (i = 0; i < m; i++) {
    for (j = i + 1; j < m; j++) {
      if (arr[i].length < arr[j].length) {
        let location = arr[i];
        arr[i] = arr[j];
        arr[j] = location;
      }
      if (arr[i].length === arr[j].length) {
        if (arr[i].localeCompare(arr[j]) > 0) {
          let location1 = arr[i];
          arr[i] = arr[j];
          arr[j] = location1;
        }
      }
    }
  }

  return arr;
}
module.exports = sortString;
