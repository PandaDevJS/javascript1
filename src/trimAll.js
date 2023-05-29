function trimAll(str) {
  let newStr = str.trim().split(" ");
  let strTrim = "";
  strTrim = newStr.filter((value) => {
    return value != "";
  });
  return strTrim.join(" ");
}
module.exports = trimAll;
