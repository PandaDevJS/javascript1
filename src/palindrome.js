function printSubStr(newStr, low, high) {
  let string = [];
  for (let i = low; i <= high; ++i) {
    string.push(newStr[i]);
  }
  return string.join("");
}
function longestPalSubstr(str) {
  let newStr = str.replace(/\s/g, "").toLowerCase();
  console.log(newStr);
  let n = str.length;
  let maxLength = 1,
    start = 0;
  for (let i = 0; i < newStr.length; i++) {
    for (let j = i; j < newStr.length; j++) {
      let flag = 1;

      for (let k = 0; k < (j - i + 1) / 2; k++)
        if (newStr[i + k] != newStr[j - k]) flag = 0;

      if (flag != 0 && j - i + 1 > maxLength) {
        start = i;
        maxLength = j - i + 1;
      }
    }
  }

  return printSubStr(newStr, start, start + maxLength - 1).length;
}
module.exports = longestPalSubstr;
