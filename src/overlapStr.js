function stringOverlap(arr) {
  let maxOverlap = 0;
  let newArr = "";
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      let overlap = 0;
      for (k = 0; k < arr[i].length; k++) {
        if (arr[j].includes(arr[i][k])) {
          overlap++;
        }
      }
      if (overlap > maxOverlap) {
        maxOverlap = overlap;
        newArr = [arr[i], arr[j]];
      }
    }
  }
  let m = newArr[0].length;
  let n = newArr[1].length;
  let longest = 0;
  let endIndex = 0;
  let matrix = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));
  for (i = 1; i <= m; i++) {
    for (j = 1; j <= n; j++) {
      if (newArr[0][i - 1] === newArr[1][j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        if (matrix[i][j] > longest) {
          longest = matrix[i][j];
          endIndex = i - 1;
        }
      } else {
        matrix[i][j] = 0;
      }
    }
  }
  let stringOverlap = newArr[0].substring(endIndex - longest + 1, endIndex + 1);
  return [stringOverlap, longest];
}
module.exports = stringOverlap;
