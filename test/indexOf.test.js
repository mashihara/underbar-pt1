const _ = require('../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'foo')).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'baz')).toBe(2);
  });

  it('returns -1 for a missing value', () => {
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'quux')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const arr = ['foo', 'bar', 'baz', 'bar', 'bar'];
    expect(_.indexOf(arr, 'bar')).toBe(1);
  });

  it('array has one element', () => {
    const arr = ['foo'];
    expect(_.indexOf(arr, 'foo')).toBe(0);
  });

});