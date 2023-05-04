const evaluatePostfix = require("./calculatePostFix");

test("result is 25", () => {
  let str = "1 + 2 * (3 * 4)";
  expect(evaluatePostfix(str)).toEqual(25);
});
test("result is 36", () => {
  let str = "(1 + 2) * (3 * 4)";
  expect(evaluatePostfix(str)).toEqual(36);
});
test("result is 17", () => {
  let str = "5 / 2  * 2  + (3 * 4)";
  expect(evaluatePostfix(str)).toEqual(17);
});
test("result is 34", () => {
  let str = " 5^2   + 2  + 3 + 4";
  expect(evaluatePostfix(str)).toEqual(34);
});
test("result is 270", () => {
  let str = " 5 ^ 3 * 2  + (5 * 4)";
  expect(evaluatePostfix(str)).toEqual(270);
});
