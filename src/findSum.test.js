const sumMax = require("./findSum");
test("sum max is 7", () => {
  let str = "-2 -3 4 -1 -2 1 5 -3";
  expect(sumMax(str)).toEqual(7);
});
test("sum max is 8", () => {
  let str = "-3 -4 5 -1 2 -4 6 -1";
  expect(sumMax(str)).toEqual(8);
});
test("sum max is 4", () => {
  let str = "-2 3 -1 2";
  expect(sumMax(str)).toEqual(4);
});
test("sum max is 5", () => {
  let str = "-2 -3 4 1 -3";
  expect(sumMax(str)).toEqual(5);
});
test("sum max is 7", () => {
  let str = "4 -1 -2 1 5 -3 -2 -3";
  expect(sumMax(str)).toEqual(7);
});
