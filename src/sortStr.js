function sort(str) {
  let arr = str.split(" ");
  let newStr;
  newStr = arr.sort().join(" ");
  return newStr;
}
module.exports = sort;
