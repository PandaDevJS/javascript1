const sort = require("./sortStr");

test('Sort String is equal "and as displays input the"', () => {
  let str = "as input and displays the";
  expect(sort(str)).toEqual("and as displays input the");
});
test('Sort String is equal "a b d k v"', () => {
  let str = "b d k v a";
  expect(sort(str)).toEqual("a b d k v");
});
test('Sort String is equal "cao công laser máy suất"', () => {
  let str = "máy laser công suất cao";
  expect(sort(str)).toEqual("cao công laser máy suất");
});
