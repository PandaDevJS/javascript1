const uniqueObj = require("./uniqObj");
test("Equal is [ { x: 1, y: 2 }, { x: 2, y: 1 },] ", () => {
  let arr = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 1, y: 2 },
  ];
  expect(uniqueObj(arr)).toEqual([
    { x: 1, y: 2 },
    { x: 2, y: 1 },
  ]);
});
