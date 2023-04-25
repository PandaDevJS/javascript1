const uniq = require("./uniq");

test("array uniq to equal [1, 2, 3, 4] ", () => {
  let arr = [1, 2, 3, 2, 4];
  expect(uniq(arr)).toEqual([1, 2, 3, 4]);
});
test('array uniq to equal ["a", 1, 2, "1"] ', () => {
  let arr = ["a", 1, "a", 2, "1"];
  expect(uniq(arr)).toEqual(["a", 1, 2, "1"]);
});
