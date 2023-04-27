const sortString = require("./sortArr");
test("", () => {
  let arr = [
    "the quick brown fox",
    "the lazy dog jumps over the fence",
    "the cat in the hat",
  ];
  expect(sortString(arr)).toEqual([
    "the lazy dog jumps over the fence",
    "the quick brown fox",
    "the cat in the hat",
  ]);
});
test("", () => {
  let arr = [
    "the cat in the hat",
    "the lazy dog jumps over the fence",
    "eth cat in the hat",
  ];
  expect(sortString(arr)).toEqual([
    "the lazy dog jumps over the fence",
    "eth cat in the hat",
    "the cat in the hat",
  ]);
});
test("", () => {
  let arr = [
    "the cat in the hat",
    "the lazy dog jumps over the fence",
    "tha lazy dog jumps over the fence",
    "eth cat in the hat",
  ];
  expect(sortString(arr)).toEqual([
    "tha lazy dog jumps over the fence",
    "the lazy dog jumps over the fence",
    "eth cat in the hat",
    "the cat in the hat",
  ]);
});
