// Recursive fast sorting

// O(n * log n)
const quickSort = array => {
  if (array.length < 2 ) return array;

  const head  = array.shift();
  const lesser = array.reduce((store, el) => el < head ? [el, ...store] : store, []);
  const greater = array.reduce((store, el) => el > head ? [el, ...store] : store, []);

  return [...quickSort(lesser), head, ...quickSort(greater)];
}

module.exports = quickSort;

