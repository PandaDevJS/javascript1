const sort = require("./bubbleSort");
test("times sort is 4", () => {
  let arr = [3, 1, 4, 2, 6, 5];
  expect(sort(arr)).toEqual(4);
});
test("times sort is 5", () => {
  let arr = [3, 4, 1, 2, 6, 5];
  expect(sort(arr)).toEqual(5);
});
test("times sort is 4", () => {
  let arr = [3, -1, 4, 2, 6, 5];
  expect(sort(arr)).toEqual(4);
});
