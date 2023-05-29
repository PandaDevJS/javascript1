const trimAll = require("./trimAll");
test('string after trim is "hello world"', () => {
  let str = "    hello     world    ";
  expect(trimAll(str)).toEqual("hello world");
});
test('string after trim is "I am good"', () => {
  let str = "   I    am    good      ";
  expect(trimAll(str)).toEqual("I am good");
});
