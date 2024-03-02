// Recursive fast sorting

const fastSort = array => {
  if (array.length < 2 ) return array;

  const head  = array.shift();
  const lesser = array.reduce((store, el) => el < head ? [el, ...store] : store, []);
  const greater = array.reduce((store, el) => el > head ? [el, ...store] : store, []);

  return [...fastSort(lesser), head, ...fastSort(greater)];
}

module.exports = fastSort;

