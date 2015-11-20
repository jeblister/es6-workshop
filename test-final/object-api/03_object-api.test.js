import {expect} from 'chai';
import {assert} from 'chai';
// To do: make all tests pass, leave the assert lines unchanged!

describe(`Object`, () => {
  it(`should be easy to copy properties from one object to another`, () => {
    const source1 = {
      a: {
        b: 'c',
        m: [1, 2, 3]
      }
    };
    const source2 = {
      d: false,
      z: 34
    };
    const source3 = {
      z: 42,
      p: ['a', 'b', 'c']
    };

    const target = {
      a: {
        q: 'r',
        m: [4, 5, 6],
        s: {
          t: 3
        }
      },
      d: true,
      p: ['x', 'y', 'z']
    };

    // merge the sources into the target using Object.assign and assign the result to `result`
    // see redux.js.org it the function they use for make a new state sith this function (state, action)=>state
    let result = Object.assign(target, source1, source2, source3)
    expect(result).to.deep.equal({
      a: {
        b: 'c',
        m: [1, 2, 3]
      },
      d: false,
      z: 42,
      p: ['a', 'b', 'c']
    });

    // this is only here to indicate that the assignment is not deep
    expect(result).to.not.deep.equal({
      a: {
        b: 'c',
        m: [1, 2, 3],
        q: 'r',
        s: {
          t: 3
        }
      },
      d: false,
      z: 42,
      p: ['a', 'b', 'c']
    })
  });
});

describe('`Object.is()` determines whether two values are the same', () => {
// see all regles at http://i.stack.imgur.com/zETNR.png
  describe('scalar values', () => {
    it('1 is the same as 1', () => {
      const areSame = Object.is(1,1);
      expect(areSame).to.be.equal(true);
      //assert.equal(areSame, true);
    });
    it('int 1 is different to string "1"', () => {
      const areSame = Object.is(1, '1');
      expect(areSame).to.be.equal(false);
      //assert.equal(areSame, false);
    });
    it('strings just have to match', () => {
      const areSame = Object.is('one', 'one');
      expect(areSame).to.be.equal(true);
      //assert.equal(areSame, true);
    });
    it('+0 is not the same as -0', () => {
      const areSame = false;
      assert.equal(Object.is(+0, -0), areSame);
    });
    it('NaN is the same as NaN', () => {
      const number = NaN;
      assert.equal(Object.is(NaN, number), true);
    });
  });

  describe('coercion, as in `==` and `===`, does NOT apply', () => {
    it('+0 != -0', () => {
      const coerced = (+0 === -0);
      const isSame = Object.is(+0, +0);
      assert.equal(isSame, coerced);
    });
    it('empty string and `false` are not the same', () => {
      const emptyString = '';
      const isSame = Object.is(emptyString, '');
      assert.equal(isSame, emptyString == false);
    });
    it('NaN', () => {
      const coerced = (NaN != NaN);
      const isSame = Object.is(NaN,NaN);
      assert.equal(isSame, coerced);
    });
    it('NaN 0/0', () => {
      const isSame = Object.is(NaN, 0/0);
      assert.equal(isSame, true);
    });
  });

  describe('complex values', () => {
    it('`{}` is just not the same as `{}`', () => {
      const areSame = {}==={};
      assert.equal(Object.is({}, {}), areSame);
    });
    it('Map', () => {
      let map1 = new Map([[1, 'one']]);
      let map2 = new Map([[2, 'two']]);
      const areSame = Object.is(map1, map1);
      assert.equal(areSame, true);
    });
  });

});
