function mapKey(collect, key) {
  return collect.map((obj) => {
    const newObj = {};
    key.forEach((key) => {
      newObj[key] = obj[key];
    });
    return newObj;
  });
}
module.exports = mapKey;
