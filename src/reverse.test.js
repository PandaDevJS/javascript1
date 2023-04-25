const reverse = require("./revese");

test("reverse array is [5, 4, 3, 2, 1]", () => {
  let arr = [1, 2, 3, 4, 5];
  expect(reverse(arr)).toEqual([5, 4, 3, 2, 1]);
});
test('reverse array is [3, "f", "e", 5, "h", "t", 4, "d", "a"] ', () => {
  let arr = ["a", "d", 4, "t", "h", 5, "e", "f", 3];
  expect(reverse(arr)).toEqual([3, "f", "e", 5, "h", "t", 4, "d", "a"]);
});
