function findmax(arr) {
  let largest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    } else {
      continue;
    }
  }

  return largest;
}
module.exports = findmax;
