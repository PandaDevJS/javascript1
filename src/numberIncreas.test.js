const numberIncreas = require("./numberIncreas");
test("result is 3", () => {
  let arr = [1, 2, 3, 8, 6, 3];

  expect(numberIncreas(arr)).toEqual(3);
});
test("result is 6", () => {
  let arr = [1, 2, 3, 8, 3, 2, 4, 5, 6, 7, 8, 9];

  expect(numberIncreas(arr)).toEqual(6);
});
test("result is 4", () => {
  let arr = [-3, -4, -2, -1, 0, 1, 3, 4];

  expect(numberIncreas(arr)).toEqual(4);
});
test("result is 7", () => {
  let arr = [-3, -4, -2, -1, 0, 1, 3, 4, 5, 6, 7, 8, 9];

  expect(numberIncreas(arr)).toEqual(7);
});
