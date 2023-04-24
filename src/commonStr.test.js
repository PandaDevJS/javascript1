const commonString = require("./commonStr");

test("Commont string is 'hello' ", () => {
  let arr = ["hello", "hello world"];

  expect(commonString(arr)).toEqual("hello");
});
test("Commont string is 'hello' ", () => {
  let arr = ["abcdef", "abczyzcdef"];

  expect(commonString(arr)).toEqual("abc");
});
