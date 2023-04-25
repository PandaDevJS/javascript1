const numberStr = require("./numberStr");
test("number of string is equal 2", () => {
  let str = "hello world";
  expect(numberStr(str)).toEqual(2);
});
test("number of string is equal 5", () => {
  let str = "take me to your heart";
  expect(numberStr(str)).toEqual(5);
});
test("number of string is equal 2", () => {
  let str = "sos 115";
  expect(numberStr(str)).toEqual(2);
});
