const switchOrder = require("./switchOrder");

test("", () => {
  let arr = [
    { id: 10, order: 0 },
    { id: 12, order: 1 },
    { id: 9, order: 2 },
    { id: 11, order: 3 },
  ];
  let id = 9;
  let newOrder = 1;
  expect(switchOrder(arr, id, newOrder)).toEqual([
    { id: 10, order: 0 },
    { id: 9, order: 1 },
    { id: 12, order: 2 },
    { id: 11, order: 3 },
  ]);
});
test("", () => {
  let arr = [
    { id: 10, order: 0 },
    { id: 12, order: 1 },
    { id: 9, order: 2 },
    { id: 11, order: 3 },
  ];
  let id = 9;
  let newOrder = 3;
  expect(switchOrder(arr, id, newOrder)).toEqual([
    { id: 10, order: 0 },
    { id: 12, order: 1 },
    { id: 11, order: 2 },
    { id: 9, order: 3 },
  ]);
});
test("", () => {
  let arr = [
    { id: 10, order: 0 },
    { id: 12, order: 1 },
    { id: 9, order: 2 },
    { id: 11, order: 3 },
  ];
  let id = 9;
  let newOrder = 0;
  expect(switchOrder(arr, id, newOrder)).toEqual([
    { id: 9, order: 0 },
    { id: 12, order: 1 },
    { id: 10, order: 2 },
    { id: 11, order: 3 },
  ]);
});
test("", () => {
  let arr = [
    { id: 10, order: 0 },
    { id: 12, order: 1 },
    { id: 9, order: 2 },
    { id: 11, order: 3 },
  ];
  let id = 11;
  let newOrder = 0;
  expect(switchOrder(arr, id, newOrder)).toEqual([
    { id: 11, order: 0 },
    { id: 12, order: 1 },
    { id: 9, order: 2 },
    { id: 10, order: 3 },
  ]);
});
