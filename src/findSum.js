function sumMax(str) {
  let arr = str.split(" ");
  let sumMax = 0;
  let currSum = 0;
  for (let j = 0; j < arr.length; j++) {
    currSum = Math.max(0, (currSum += parseInt(arr[j])));
    sumMax = Math.max(sumMax, currSum);
  }
  return sumMax;
}
module.exports = sumMax;
