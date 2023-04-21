const longestStr = require("./longestStr");

test('longest of list string is "everyon" ', () => {
  let str = "Hello everyone";
  expect(longestStr(str)).toEqual("everyone");
});
test("longest of list string is 'second' ", () => {
  let str = "first second third fourt";
  expect(longestStr(str)).toEqual("second");
});
test("longest of list string is 'python' ", () => {
  let str = "java python ruby";
  expect(longestStr(str)).toEqual("python");
});
