function secondLargest(str) {
  let arr = str.split(" ");
  let arrSort = arr.sort((a, b) => a - b);
  let number = parseInt(arrSort[arrSort.length - 2]);
  return number;
}
module.exports = secondLargest;
