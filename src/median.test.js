const findMedian = require("./median");
test("Median is euqal 3.5", () => {
  var arr = [1, 3, 4, 5];
  expect(findMedian(arr)).toEqual(3.5);
});
test("Median is euqal 3", () => {
  var arr = [1, 3, 4, 5, 2];
  expect(findMedian(arr)).toEqual(3);
});

test("Median is euqal 3.75", () => {
  var arr = [1.0, 2.11, 3.3, 4.2, 5.22, 6.55];
  expect(findMedian(arr)).toEqual(3.75);
});
test("Median is euqal 22.3", () => {
  var arr = [2.0, 12.11, 22.3, 24.12, 55.22];
  expect(findMedian(arr)).toEqual(22.3);
});
