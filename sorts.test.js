const fastSort = require('./fast-sort')

describe('Sorts', () => {


  test('Complex', () => {
    const result = fastSort([3, 1, 2, 11, 15, 22, 10]);
    expect(result.pop()).toBe(22);
    expect(result.shift()).toBe(1);

  });
});
