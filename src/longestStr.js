function longestStr(str) {
  let arr = str.split(" ");
  let longStr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longStr.length) {
      longStr = arr[i];
    }
  }
  return longStr;
}
module.exports = longestStr;
