function smallSecond(str) {
  let arr = str.split(" ");
  let newArr = arr.sort((a, b) => a - b);
  let number = parseFloat(newArr[1]);
  return number;
}
module.exports = smallSecond;
