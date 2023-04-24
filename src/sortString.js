function sort(arr) {
  let newArr = [];
  newArr = arr.sort((a, b) => a.length - b.length);
  return newArr;
}
module.exports = sort;
