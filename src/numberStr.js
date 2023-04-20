function findNumber(str) {
  let arr = str.split(" ");
  let i = 0;
  arr.map((value) => {
    if (value.includes("a")) {
      i++;
    }
    // return i;
  });
  return i;
}
module.exports = findNumber;
