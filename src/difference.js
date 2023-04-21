function difference(str) {
  let arr = str.split(" ");
  let newArr = arr.sort((a, b) => a - b);
  let m = newArr.length;
  let diff = newArr[m - 1] - newArr[0];
  return diff;
}
module.exports = difference;
