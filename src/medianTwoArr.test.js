const findMedian = require("./medianTwoArr");
test("Median is euqal 5", () => {
  var arr1 = [1, 3, 4, 5];
  var arr2 = [2, 6, 7, 8, 9];
  expect(findMedian(arr1, arr2)).toEqual(5);
});
test("Median is euqal 15", () => {
  var arr1 = [10, 13, 14, 15];
  var arr2 = [12, 16, 17, 18, 19];
  expect(findMedian(arr1, arr2)).toEqual(15);
});
test("Median is euqal 1", () => {
  var arr1 = [-5, -3, -1, 0];
  var arr2 = [1, 6, 5, 2, 4];
  expect(findMedian(arr1, arr2)).toEqual(1);
});
test("Median is euqal 1.5", () => {
  var arr1 = [-5, -3, -1];
  var arr2 = [1, 6, 5, 2, 4];
  expect(findMedian(arr1, arr2)).toEqual(1.5);
});
test("Median is euqal 0.5", () => {
  var arr1 = [-2.5, -3, -1];
  var arr2 = [0, 2.5, 3, 1, 4];
  expect(findMedian(arr1, arr2)).toEqual(0.5);
});
