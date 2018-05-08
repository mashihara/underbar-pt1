const _ = require('../underbar');

describe('last()', () => {
  describe('arg1 is multiple element', () =>{

    it('returns the last element of an array', () => {
      expect(_.last(['a', 'b', 'c'])).toEqual('c');
    });

    it('returns the last 2 elements of an array', () => {
      expect(_.last(['a', 'b', 'c'], 2)).toEqual(['b', 'c']);
    });

    it('returns the whole array if you ask for more elements than it has', () => {
      expect(_.last(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
    });

    it('returns the last 2 elements of an array when arg2 is 1', () => {
      expect(_.last(['a', 'b', 'c'], 1)).toEqual('c');
    });
    
    it('returns the empty array', () => {
      expect(_.last(['a', 'b', 'c'], 0)).toEqual([]);
    });

    it('returns the empty array when arg2 is minus number', () => {
      expect(_.last(['a', 'b', 'c'], -1)).toEqual([]);
    });
  })

  describe('arg1 is one element', () =>{
    it('arg2: minus number', () => {
      expect(_.last(['a'],-1)).toEqual([]);
    });
  
    it('arg2: 0', () => {
      expect(_.last(['a'],0)).toEqual([]);
    });
  
    it('arg2: none', () => {
      expect(_.last(['a'])).toEqual('a');
    });
  
    it('arg2: 1', () => {
      expect(_.last(['a'],1)).toEqual('a');
    });
    
    it('arg2: 2', () => {
      expect(_.last(['a'],2)).toEqual(['a']);
    });  
  })
});