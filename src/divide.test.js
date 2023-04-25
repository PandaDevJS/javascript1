const divide = require("./divide");

test("sum divisible by both 3 and 5 is 45 ", () => {
  let str = "2 5 15 30 6";
  expect(divide(str)).toEqual(45);
});
test("sum divisible by both 3 and 5 is 135 ", () => {
  let str = "-15 45 -30 90 25";
  expect(divide(str)).toEqual(135);
});
test("sum divisible by both 3 and 5 is 150 ", () => {
  let str = " 45 15 90 25";
  expect(divide(str)).toEqual(150);
});
