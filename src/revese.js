function reverse(arr) {
  let newArr = [];
  let m = arr.length;
  arr.forEach((item) => {
    newArr.unshift(item);
  });
  return newArr;
}
module.exports = reverse;
