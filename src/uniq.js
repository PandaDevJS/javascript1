function uniq(arr) {
  const unique = arr.filter((value, index, selfArr) => {
    return selfArr.indexOf(value) === index;
  });
  return unique;
}

module.exports = uniq;
