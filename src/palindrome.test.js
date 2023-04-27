const longestPalSubstr = require("./palindrome");

test('palindrome string is "amanaplanacanalpanama" length is 21', () => {
  let str = "A man a plan a canal Panama";
  expect(longestPalSubstr(str)).toEqual(21);
});
test('palindrome string is "geeksskeeg" length is 10 ', () => {
  let str = "forgeeksskeegfor";
  expect(longestPalSubstr(str)).toEqual(10);
});
test('palindrome string is "3553" length is 4 ', () => {
  let str = "3 5 5 3";
  expect(longestPalSubstr(str)).toEqual(4);
});
test('palindrome string is "radar" length is 5', () => {
  let str = "r a d a r";
  expect(longestPalSubstr(str)).toEqual(5);
});
