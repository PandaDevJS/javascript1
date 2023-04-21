const findLis = require("./numberLis");

test(" 3", () => {
  let arr = [3, 10, 2, 1, 20];
  expect(findLis(arr)).toEqual(3);
});
test(" 4", () => {
  let arr = [50, 3, 10, 7, 40, 80];
  expect(findLis(arr)).toEqual(4);
});
test(" 3", () => {
  let arr = [1, 4, 2, 3, 2];
  expect(findLis(arr)).toEqual(3);
});
test(" 4", () => {
  let arr = [10, 9, 2, 5, 3, 7, 101, 18];
  expect(findLis(arr)).toEqual(4);
});
test(" 4", () => {
  let arr = [0, 1, 0, 3, 2, 3];
  expect(findLis(arr)).toEqual(4);
});
