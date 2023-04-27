const distinctSub = require("./distinctSub");
test("result is 4", () => {
  let arr = [1, 1, 2, 3, 4];
  let target = 5;
  expect(distinctSub(arr, target)).toEqual(4);
});
test("result is 3", () => {
  let arr = [1, 2, 3, 4, 5];
  let target = 5;
  expect(distinctSub(arr, target)).toEqual(3);
});
