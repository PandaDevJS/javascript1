const mapKey = require("./mapKey");
test("result is [{ b: 1, a: 1, c: 2 },{ b: 1, a: 2, c: 5 },{ b: 11, a: 22, c: 51 },]", () => {
  let collect = [
    { a: 1, b: 1, c: 2, d: 4, e: 5 },
    { a: 2, b: 1, c: 5, d: 4, e: 5 },
    { d: 4, e: 5, a: 22, b: 11, c: 51 },
  ];
  let keys = ["b", "a", "c"];
  expect(mapKey(collect, keys)).toEqual([
    { b: 1, a: 1, c: 2 },
    { b: 1, a: 2, c: 5 },
    { b: 11, a: 22, c: 51 },
  ]);
});
test("result is [ { b: 1, c: 2 }, { b: 1, c: 5 }, { b: 11, c: 51 } ]", () => {
  let collect = [
    { a: 1, b: 1, c: 2, d: 4, e: 5 },
    { a: 2, b: 1, c: 5, d: 4, e: 5 },
    { d: 4, e: 5, a: 22, b: 11, c: 51 },
  ];
  let keys = ["b", "c"];
  expect(mapKey(collect, keys)).toEqual([
    { b: 1, c: 2 },
    { b: 1, c: 5 },
    { b: 11, c: 51 },
  ]);
});
test("result is [ { b: 1, a: 1 }, { b: 1, a: 2 }, { b: 11, a: 22 } ]", () => {
  let collect = [
    { a: 1, b: 1, c: 2, d: 4, e: 5 },
    { a: 2, b: 1, c: 5, d: 4, e: 5 },
    { d: 4, e: 5, a: 22, b: 11, c: 51 },
  ];
  let keys = ["b", "a"];
  expect(mapKey(collect, keys)).toEqual([
    { b: 1, a: 1 },
    { b: 1, a: 2 },
    { b: 11, a: 22 },
  ]);
});
