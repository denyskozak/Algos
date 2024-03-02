// O(n)

const findMin = array => Math.min(...array);

const selectionSort = array => {
  console.log('array: ', array); 
  if (array.length < 2) return array;
  const result = [];
  while (array.length) {
    const min = findMin(array);
    const minIndex = array.indexOf(min);
    array.splice(minIndex, 1);
    result.push(min);
  }

  return result;
}

module.exports = selectionSort;

