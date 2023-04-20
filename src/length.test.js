const length = require("./length");

test("length of hello to equal 5", () => {
  expect(length("hello")).toBe(5);
});
test("length of hello 123 to equal 9", () => {
  expect(length("hello 123")).toBe(9);
});
