function shortestStr(str) {
  let arr = str.split(" ");
  let shortest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    }
  }
  return shortest;
}
module.exports = shortestStr;
