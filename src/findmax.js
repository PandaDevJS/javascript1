function findmax(arr) {
  let largest = Number(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (Number(arr[i]) > largest) {
      largest = arr[i];
    } else {
      continue;
    }
  }

  return largest;
}
module.exports = findmax;
