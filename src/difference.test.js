const difference = require("./difference");
test("the maximum difference between any two elements in the list is 99", () => {
  let str = "1 2 91 9 100";
  expect(difference(str)).toEqual(99);
});
test("the maximum difference between any two elements in the list is 98", () => {
  let str = "3 2 50 33 100";
  expect(difference(str)).toEqual(98);
});
test("the maximum difference between any two elements in the list is 150", () => {
  let str = "-3 -2 -50 33 100";
  expect(difference(str)).toEqual(150);
});
test("the maximum difference between any two elements in the list is 105", () => {
  let str = "-3 0 -25 45 80";
  expect(difference(str)).toEqual(105);
});
test("the maximum difference between any two elements in the list is 70", () => {
  let str = "10 23 48 45 80";
  expect(difference(str)).toEqual(70);
});
