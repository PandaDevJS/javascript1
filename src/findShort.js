function shortestStr(str) {
  let arr = str.split(" ");
  let short = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < short.length) {
      short = arr[i];
    }
  }
  return short;
}
module.exports = shortestStr;
