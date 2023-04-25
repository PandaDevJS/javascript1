const findSmallest = require("./smallest");
test("the smallest positive integer is 42", () => {
  let arr = [1, 2, 3, 7, 8, 20];
  expect(findSmallest(arr)).toEqual(42);
});
test("the smallest positive integer is 2", () => {
  let arr = [1, 3, 6, 10, 11, 15];
  expect(findSmallest(arr)).toEqual(2);
});
test("the smallest positive integer is 2", () => {
  let arr = [1, 4, 8, 12, 13, 17];
  expect(findSmallest(arr)).toEqual(2);
});
