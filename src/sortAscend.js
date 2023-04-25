function sort(arr) {
  let newArr;
  newArr = arr.sort((a, b) => a - b);
  console.log(newArr);
  return newArr.join(", ");
}
module.exports = sort;
