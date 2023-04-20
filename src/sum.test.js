const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 6 + 7 to equal 13", () => {
  expect(sum(6, 7)).toBe(13);
});

test("adds 100 + 122 to equal 222", () => {
  expect(sum(100, 122)).toBe(222);
});

test("adds -1 + -2 to equal -3", () => {
  expect(sum(-1, -2)).toBe(-3);
});

test("adds -1 + 9 to equal 8", () => {
  expect(sum(-1, 9)).toBe(8);
});
