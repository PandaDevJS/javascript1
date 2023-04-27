const commonString = require("./commonStr");

test("Commont string is 'hello' ", () => {
  let str1 = "hello";
  let str2 = "hello world";

  expect(commonString(str1, str2)).toEqual("hello");
});
test("Commont string is 'cdef' ", () => {
  let str1 = "abcdef";
  let str2 = "abczyzcdef";

  expect(commonString(str1, str2)).toEqual("cdef");
});
