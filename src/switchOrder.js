function switchOrder(arr, id, newOrder) {
  let indexFrom = arr.findIndex((obj) => obj.id === id);
  let indexTo = arr.findIndex((obj) => obj.order === newOrder);

  let objFrom = arr[indexFrom];
  let objTo = arr[indexTo];

  arr.splice(indexTo, 1, objFrom);
  console.log(arr);
  arr.splice(indexFrom, 1, objTo);
  arr.forEach((obj, i) => {
    obj.order = i;
  });

  return arr;
}
module.exports = switchOrder;
