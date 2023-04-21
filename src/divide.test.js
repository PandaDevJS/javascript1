const divide = require("./divide");

test("number divisible by both 3 and 5 is '15 30' ", () => {
  let str = "2 5 15 30 6";
  expect(divide(str)).toEqual("15 30");
});
test("number divisible by both 3 and 5 is '45 90' ", () => {
  let str = "-15 45 -30 90 25";
  expect(divide(str)).toEqual("45 90");
});
