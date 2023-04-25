const longestPalSubstr = require("./palindrome");

test('palindrome string is "amanaplanacanalpanama" ', () => {
  let str = "A man a plan a canal Panama";
  expect(longestPalSubstr(str)).toEqual("amanaplanacanalpanama");
});
test('palindrome string is "geeksskeeg" ', () => {
  let str = "forgeeksskeegfor";
  expect(longestPalSubstr(str)).toEqual("geeksskeeg");
});
test('palindrome string is "3553" ', () => {
  let str = "3 5 5 3";
  expect(longestPalSubstr(str)).toEqual("3553");
});
test('palindrome string is "radar" ', () => {
  let str = "r a d a r";
  expect(longestPalSubstr(str)).toEqual("radar");
});
