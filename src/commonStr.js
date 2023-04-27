function commonString(str1, str2) {
  let commonChars = "";
  var m = str1.length;
  var n = str2.length;
  var longest = 0;
  var endIndex = 0;
  var matrix = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));
  for (i = 1; i <= m; i++) {
    for (j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
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
  commonChars = str1.substring(endIndex - longest + 1, endIndex + 1);
  return commonChars;
}
module.exports = commonString;
