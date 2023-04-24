function commonString(arr) {
  let commonChars = "";
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      findCommon(arr[i], arr[j]);
    }
  }
  function findCommon(a, b) {
    if (a.indexOf(b) >= 0) {
      if (commonChars.length < b.length) {
        commonChars = b;
      }

      return a;
    }
    return findCommon(a, b.substring(0, b.length - 1));
  }
  return commonChars;
}
module.exports = commonString;
