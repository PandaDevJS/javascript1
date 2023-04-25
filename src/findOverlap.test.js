const stringOverlap = require("./findOverlap");

test('two overlap string is ["cdefghijklm", "ghijklmnopqr"]', () => {
  let arr = ["abcdefg", "cdefghijklm", "ghijklmnopqr"];
  expect(stringOverlap(arr)).toEqual(["cdefghijklm", "ghijklmnopqr"]);
});
test('two overlap string is ["foobar", "barfoo"]', () => {
  let arr = ["hello", "world", "foobar", "barfoo", "he", "llo"];
  expect(stringOverlap(arr)).toEqual(["foobar", "barfoo"]);
});
test('two overlap string is ["all is well", "t ends well"]', () => {
  let arr = ["all is well", "ell that en", "hat end", "t ends well"];
  expect(stringOverlap(arr)).toEqual(["all is well", "t ends well"]);
});
