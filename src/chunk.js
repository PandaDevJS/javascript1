// const perChunk = 3 // items per chunk

// const inputArray = ['a','b','c','d','e', "f", 'g']
function chunk(arr, perChunk) {
  const result = arr.reduce((resultArray, item, index) => {
    console.log(item);
    const chunkIndex = Math.floor(index / perChunk);
    console.log(chunkIndex);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);
    console.log(resultArray);
    return resultArray;
  }, []);

  return result;
}
module.exports = chunk;
