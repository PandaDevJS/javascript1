function uniqueObj(array) {
  const unique = array.filter(
    (value, index, self) =>
      self.findIndex((m) => m.x === value.x && m.y === value.y) === index
  );
  return unique;
}
module.exports = uniqueObj;
