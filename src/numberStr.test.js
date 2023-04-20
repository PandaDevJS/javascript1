const findNumber = require("./numberStr");

test("the number of strings that contain the letter 'a' is 2", () => {
  let str = "java javascript python";
  expect(findNumber(str)).toEqual(2);
});
test("the number of strings that contain the letter 'a' is 7", () => {
  let str =
    "Write a program that takes a string as input and returns the number of words in the string";
  expect(findNumber(str)).toEqual(7);
});
