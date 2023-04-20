const sort = require("./sortAscend");

test('Ascending is "1, 3, 4, 5, 6, 7" ', () => {
  arr = [5, 4, 6, 1, 3, 7];
  expect(sort(arr)).toEqual("1, 3, 4, 5, 6, 7");
});
test('Ascending is "-5, -2, 0, 4, 6" ', () => {
  arr = [6, 4, -2, -5, 0];
  expect(sort(arr)).toEqual("-5, -2, 0, 4, 6");
});
test('Ascending is "-2, -1.5, 0, 2, 3" ', () => {
  arr = [3, -1.5, -2, 2, 0];
  expect(sort(arr)).toEqual("-2, -1.5, 0, 2, 3");
});
