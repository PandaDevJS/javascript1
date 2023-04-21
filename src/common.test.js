const common = require("./common");

test("", () => {
  let str1 = "hello";
  let str2 = "helloworld";
  expect(common(str1, str2)).toEqual("hello");
});
