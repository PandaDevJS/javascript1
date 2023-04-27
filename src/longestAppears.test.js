const longestAppears = require("./longestAppears");
test("result is 2", () => {
  let arr = ["abcdefg", "abcde", "abcdef", "ab", "abc"];
  expect(longestAppears(arr)).toEqual(2);
});
test("result is 7", () => {
  let arr = ["programming", "programmer", "program"];
  expect(longestAppears(arr)).toEqual(7);
});
test("result is 1", () => {
  let arr = ["hello", "world", "jelly"];
  expect(longestAppears(arr)).toEqual(1);
});
test("result is 2", () => {
  let arr = ["abcd", "ab", "abcd", "ab", "abcd"];
  expect(longestAppears(arr)).toEqual(2);
});
