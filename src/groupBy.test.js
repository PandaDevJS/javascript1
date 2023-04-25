const groupBy = require("./groupBy");
test("result is {1: [{a: 1, b: 2}, {a: 1, b: 3}], 2: [{a: 2, b: 2}]}", () => {
  let collect = [
    { a: 1, b: 2 },
    { a: 1, b: 3 },
    { a: 2, b: 2 },
  ];
  let key = "a";
  expect(groupBy(collect, key)).toEqual({
    1: [
      { a: 1, b: 2 },
      { a: 1, b: 3 },
    ],
    2: [{ a: 2, b: 2 }],
  });
});
test("result is {2: [{ a: 1, b: 2 },{ a: 2, b: 2 },],3: [{ a: 1, b: 3 }", () => {
  let collect = [
    { a: 1, b: 2 },
    { a: 1, b: 3 },
    { a: 2, b: 2 },
  ];
  let key = "b";
  expect(groupBy(collect, key)).toEqual({
    2: [
      { a: 1, b: 2 },
      { a: 2, b: 2 },
    ],
    3: [{ a: 1, b: 3 }],
  });
});
