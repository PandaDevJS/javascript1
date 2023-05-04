const smallSecond = require("./smallSecond");
test("the second smallest number in the list is 4", () => {
  let str = "-2 4 5 1 3";
  expect(smallSecond(str)).toEqual(1);
});
test("the second smallest number in the list is 4", () => {
  let str = "-1.5 -1 4 5 100";
  expect(smallSecond(str)).toEqual(-1);
});
test("the second smallest number in the list is 4", () => {
  let str = "5 20 0.5 0.7 3";
  expect(smallSecond(str)).toEqual(0.7);
});
