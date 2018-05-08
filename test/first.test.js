const _ = require('../underbar');

describe('first()', () => {
  describe('arg1 is multiple element', () =>{

    it('returns the first element of an array', () => {
      expect(_.first(['a', 'b', 'c'])).toEqual('a');
    });

    it('returns the first 2 elements of an array', () => {
      expect(_.first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
    });

    it('returns the whole array if you ask for more elements than it has', () => {
      expect(_.first(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
    });

    it('returns the first elements of an array when arg2 is 1', () => {
      expect(_.first(['a', 'b', 'c'], 1)).toEqual('a');
    });
    
    it('returns the empty array', () => {
      expect(_.first(['a', 'b', 'c'], 0)).toEqual([]);
    });

    it('returns the first 2 elements of an array when arg2 is minus number', () => {
      expect(_.first(['a', 'b', 'c'], -1)).toEqual(['a', 'b']);
    });
  })

  describe('arg1 is one element', () =>{
    it('arg2:minus number', () => {
      expect(_.first(['a'],-1)).toEqual([]);
    });

    it('arg2: 0', () => {
      expect(_.first(['a'],0)).toEqual([]);
    });

    it('arg2: none', () => {
      expect(_.first(['a'])).toEqual('a');
    });

    it('arg2: 1', () => {
      expect(_.first(['a'],1)).toEqual('a');
    });

    it('arg2: 2', () => {
      expect(_.first(['a'],2)).toEqual(['a']);
    });
  })
})