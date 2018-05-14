const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });
  it('object', () => {
    const nums = {foo:3,bar:2,baz:3,hoge:2};
    expect(_.uniq(nums)).toEqual([3,2]);
  });

});