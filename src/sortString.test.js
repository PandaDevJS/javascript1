const sort = require("./sortString");
test('String sorted is ["kiwi" "apple" "banana" "orange" "strawberry"] , ', () => {
  let arr = ["apple", "banana", "orange", "kiwi", "strawberry"];
  expect(sort(arr)).toEqual([
    "kiwi",
    "apple",
    "banana",
    "orange",
    "strawberry",
  ]);
});
test('String sorted is ["nut", "apple", "cherry", "raspberry"]', () => {
  let arr = ["raspberry", "nut", "cherry", "apple"];
  expect(sort(arr)).toEqual(["nut", "apple", "cherry", "raspberry"]);
});
["raspberry", "nut", "cherry", "apple"];
