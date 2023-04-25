function findSmallest(arr) {
  let res = 1;
  for (let ind = 0; ind < arr.length && arr[ind] <= res; ind++) {
    res += arr[ind];
  }
  return res;
}
module.exports = findSmallest;
