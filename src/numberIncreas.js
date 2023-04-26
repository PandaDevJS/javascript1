function numberIncreas(arr) {
  let sum = 1;
  let max = [];
  arr.reduce((total, cur, index) => {
    if (arr[index + 1] - arr[index] === 1) {
      sum++;
      max.push(sum);
    } else if (arr[index + 1] - arr[index] !== 1) {
      //   console.log(sum)
      sum = 1;
    }
  }, 0);

  return Math.max(...max);
}
module.exports = numberIncreas;
