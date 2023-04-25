function findMedian(arr) {
  let newArr = arr.sort((a, b) => a - b);
  let n = newArr.length;
  let median;
  if (n % 2 === 0) {
    let m = n / 2;
    median = (newArr[m - 1] + newArr[m]) / 2;
  } else {
    let m = Math.floor(n / 2);
    median = newArr[m];
  }
  return median;
}
module.exports = findMedian;
