function common(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let letter = [];
  let m = arr1.length;
  let n = arr2.length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j <= n; j++) {
      if (arr1[i] === arr2[j]) {
        letter = letter.push(arr1[i]);
      }
    }
  }
  return letter;
}
module.exports = common;
