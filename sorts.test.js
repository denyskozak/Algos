const quick = require('./quick-sort')
const selection = require('./selection-sort')

describe('Sorts', () => {
  const baseCase = [3, 1, 2, 11, 15, 22, 10];
  const max = 22;
  const min = 1;

  test('Quick', () => {
    const result = quick([...baseCase]);
    expect(result.pop()).toBe(max);
    expect(result.shift()).toBe(min);
  });

  test('Selection', () => {
    const result = selection([...baseCase]);
    console.log('result: ', result); 
    expect(result.pop()).toBe(max);
    expect(result.shift()).toBe(min);
  });
});
