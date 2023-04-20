const square = require("./square");
test("Square is 4", () => {
  var a = 2;
  expect(square(a)).toBe(4);
});
test("Square is 4", () => {
  var a = -2;
  expect(square(a)).toBe(4);
});
test("Square is 25", () => {
  var a = 5;
  expect(square(a)).toBe(25);
});
test("Square is 100", () => {
  var a = 10;
  expect(square(a)).toBe(100);
});
test("Square is 2.25", () => {
  var a = 1.5;
  expect(square(a)).toBe(2.25);
});
