const shortestStr = require("./findShort");

test("shortest to equal the", () => {
  const str = "hello the world";
  expect(shortestStr(str)).toBe("the");
});
test("shortest to equal 12", () => {
  const str = "asus dell macbook 12";
  expect(shortestStr(str)).toBe("12");
});
test("shortest to equal cả", () => {
  const str = "Xin chào tất cả";
  expect(shortestStr(str)).toBe("cả");
});
test("shortest to equal Bài", () => {
  const str = "Bài thuat toan";
  expect(shortestStr(str)).toEqual("Bài");
});
