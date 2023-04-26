const multi = require("./multiplication");
test("maxinmum is 200", () => {
  let arr = [-10, -5, 0, 1, 2, 3, 4];
  expect(multi(arr)).toEqual(200);
});
test("maxinmum is 150", () => {
  let arr = [-10, -5, 0, 1, 2, 3];
  expect(multi(arr)).toEqual(150);
});
test("maxinmum is 30", () => {
  let arr = [-10, -1, 0, 1, 2, 3];
  expect(multi(arr)).toEqual(30);
});
test("maxinmum is 6", () => {
  let arr = [-10, 1, 1, 2, 3];
  expect(multi(arr)).toEqual(6);
});
