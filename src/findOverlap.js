function stringOverlap(arr) {
  var maxOverlap = 0;
  var twoStringMaxOverlap = "";
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      var overlap = 0;
      for (k = 0; k < arr[i].length; k++) {
        if (arr[j].includes(arr[i][k])) {
          overlap++;
        }
      }
      if (overlap > maxOverlap) {
        maxOverlap = overlap;
        twoStringMaxOverlap = [arr[i], arr[j]];
      }
    }
  }
  return twoStringMaxOverlap;
}
module.exports = stringOverlap;
