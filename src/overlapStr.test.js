const stringOverlap = require("./overlapStr");
test('result is ["foo", 3] ', () => {
  let arr = ["hello", "world", "foobar", "barfoo", "he", "llo"];
  expect(stringOverlap(arr)).toEqual(["foo", 3]);
});
test('result is ["cdef", 4] ', () => {
  let arr = ["abcdef", "abczyzcdef"];
  expect(stringOverlap(arr)).toEqual(["cdef", 4]);
});
