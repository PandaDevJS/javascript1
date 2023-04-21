const secondLargest = require("./secondLargest");

test("seconde largest of string is 8 ", () => {
  str = "1 3 6 8 9";
  expect(secondLargest(str)).toBe(8);
});
test("seconde largest of string is -3 ", () => {
  str = "-1 -3 -6 -8 -9";
  expect(secondLargest(str)).toBe(-3);
});
test("seconde largest of string is 4 ", () => {
  str = "-1 -3 4 5 -9";
  expect(secondLargest(str)).toBe(4);
});
