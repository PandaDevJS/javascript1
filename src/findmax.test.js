const findmax = require("./findmax");

test("largest to equal 8", () => {
  const arr = [5, 2, 8, 1, 6];
  expect(findmax(arr)).toEqual(8);
});
test("largest to equal 5", () => {
  const arr = [0, 3, 2, 3, 5];
  expect(findmax(arr)).toEqual(5);
});
test("largest to equal 8", () => {
  const arr = [-5, 2, 8, -1, 6];
  expect(findmax(arr)).toEqual(8);
});
test("largest to equal 4", () => {
  const arr = [1.5, 1.2, 4, -2.5, 3.7];
  expect(findmax(arr)).toEqual(4);
});
test("largest to equal -1.2", () => {
  const arr = [-1.5, -1.2, -4, -2.5, -3.7];
  expect(findmax(arr)).toEqual(-1.2);
});
