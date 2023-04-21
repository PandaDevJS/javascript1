function divide(str) {
  let arr = str.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0 && arr[i] > 0) {
      newArr = newArr.concat(arr[i]);
    }
  }
  return newArr.join(" ");
}
module.exports = divide;
