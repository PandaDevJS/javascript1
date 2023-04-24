const chunk = require("./chunk");
test('["a", "b", "c", "d"] chia mang cho 2 ["a", "b"], [ "c","d"]', () => {
  let arr = ["a", "b", "c", "d"];
  let perchunk = 2;
  expect(chunk(arr, perchunk)).toEqual([
    ["a", "b"],
    ["c", "d"],
  ]);
});
test('["a", "b", "c", "d"] chia mang cho 3 ["a", "b", "c"], ["d"]', () => {
  let arr = ["a", "b", "c", "d"];
  let perchunk = 3;
  expect(chunk(arr, perchunk)).toEqual([["a", "b", "c"], ["d"]]);
});
