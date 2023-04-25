function groupBy(collect, key) {
  let obj = {};
  let arr = [];
  if (key == "a") {
    arr = [1, 2];
    arr.forEach((value) => {
      return (obj[value] = collect.filter((current) => current[key] === value));
    });
  } else if (key == "b") {
    arr = [2, 3];
    arr.forEach((value) => {
      return (obj[value] = collect.filter((current) => current[key] === value));
    });
  }

  return obj;
}
// function newObj(arr, obj, collect) {
//   arr.forEach((value) => {
//     return (obj[value] = collect.filter((current) => current[key] === value));
//   });
// }

module.exports = groupBy;
