const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('object,tue', () => {
    const obj = {name:'taro',age:32};
    expect(_.some(obj, value => value === 'taro')).toBe(true);
  });

  it('object,false', () => {
    const obj = {name:'taro',age:32};
    expect(_.some(obj, value => value === 'hiroshi')).toBe(false);
  });



});