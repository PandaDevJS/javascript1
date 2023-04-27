function longestAppears(arr) {
  if (!arr.length) {
    return "";
  }
  let result = "";
  const n = arr.length;
  const m = arr[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < m + 1; j++) {
      const substring = arr[0].substring(i, j);
      if (arr.every((string) => string.includes(substring))) {
        if (substring.length > result.length) {
          result = substring;
        }
      }
    }
  }
  return result.length;
}
module.exports = longestAppears;
