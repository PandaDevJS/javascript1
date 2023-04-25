function divide(str) {
  let arr = str.split(" ");
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0 && arr[i] > 0) {
      total += parseInt(arr[i]);
    }
  }
  return total;
}
module.exports = divide;
