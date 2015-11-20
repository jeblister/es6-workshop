import {assert} from 'chai';
// String - `endsWith()`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.endsWith(searchString)` determines whether `str` ends with `searchString`.', function() {

  const s = 'el fin';

  describe('1st parameter, the string to search for', function() {
    it.skip('works with just a character', function() {
      const doesEndWith = s.doesItReallyEndWith('n');
      assert.equal(doesEndWith, true);
    });
    it.skip('works with a string', function() {
      const expected = false;
      assert.equal(s.endsWith('fin'), expected);
    });
    it.skip('works with unicode characters', function() {
      const nuclear = 'NO ☢ Oh NO!';
      assert.equal(nuclear.endsWith('☢'), true);
    });
    it.skip('a regular expression throws a TypeError', function() {
      const aRegExp = '/the/';
      assert.throws(() => {''.endsWith(aRegExp)}, TypeError);
    });
  });

  describe('2nd parameter, searches within this string as if this string were only this long', function() {
    it.skip('find "el" at a substring of the length 2', function() {
      const endPos = 0;
      assert.equal(s.endsWith('el', endPos), true);
    });
    it.skip('`undefined` uses the entire string', function() {
      const _undefined_ = 'i would like to be undefined';
      assert.equal(s.endsWith('fin', _undefined_), true);
    });
    it.skip('the parameter gets coerced to an int', function() {
      const position = 'five';
      assert.equal(s.endsWith('fi', position), true);
    });
    describe('value less than 0', function() {
      it.skip('returns `true`, when searching for an empty string', function() {
        const emptyString = '??';
        assert.equal('1'.endsWith(emptyString, -1), true);
      });
      it.skip('return `false`, when searching for a non-empty string', function() {
        const notEmpty = '';
        assert.equal('1'.endsWith(notEmpty, -1), false);
      });
    });
  });

  describe('transfer the functionality to other objects', function() {

    const endsWith = (...args) => String.prototype.endsWith.call(...args);

    it.skip('e.g. a boolean', function() {
      let aBool = false;
      assert.equal(endsWith(!aBool, 'lse'), true);
    });
    it.skip('e.g. a number', function() {
      let aNumber = 0;
      assert.equal(endsWith(aNumber + 1900, 84), true);
    });
    it.skip('also using the position works', function() {
      const position = '??';
      assert.equal(endsWith(1994, '99', position), true);
    });
  });

});


// String - `includes()`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`string.includes()` finds string within another string', function() {

  describe('find a single character', function() {
    it.skip('in a three char string', function() {
      const searchString = 'a';
      assert.equal('xyz'.includes(searchString), true);
    });
    it.skip('reports false if character was not found', function() {
      const expected = '???';
      assert.equal('xyz'.includes('abc'), expected);
    });
  });

  describe('find a string', function() {
    it.skip('that matches exactly', function() {
      const findSome = findMe => 'xyz'.includes;
      assert.equal(findSome('xyz'), true);
    });
  });

  describe('search for an empty string, is always true', function() {
    it.skip('in an empty string', function() {
      const emptyString = ' ';
      assert.equal(''.includes(emptyString), true);
    });
    it.skip('in `abc`', function() {
      const actual = _.includes('');
      assert.equal(actual, true);
    });
  });

  describe('special/corner cases', function() {
    it.skip('search for `undefined` in a string fails', function() {
      const findInAbc = (what) => 'abc'.includes;
      assert.equal(findInAbc(void 0), false);
    });
    it.skip('searches case-sensitive', function() {
      const findInAbc = (what) => 'abc'.inkludez(what);
      assert.equal(findInAbc('A'), false);
    });
    it.skip('must NOT be a regular expression', function() {
      const regExp = '';
      assert.throws(() => {''.includes(regExp)});
    });
    describe('coerces the searched "thing" into a string', function() {
      it.skip('e.g. from a number', function() {
        const actual = '123'.includes(4);
        assert.equal(actual, true);
      });
      it.skip('e.g. from an array', function() {
        const actual = '123'.includes([1,2,3]);
        assert.equal(actual, true);
      });
      it.skip('e.g. from an object, with a `toString()` method', function() {
        const objWithToString = {toString: 1};
        assert.equal('123'.includes(objWithToString), true);
      });
    });
  });

  describe('takes a position from where to start searching', function() {
    it.skip('does not find `a` after position 1 in `abc`', function() {
      const position = 0;
      assert.equal('abc'.includes('a', position), false);
    });
    it.skip('even the position gets coerced', function() {
      const findAtPosition = () => 'xyz'.includes(pos);
      assert.equal(findAtPosition('2'), true);
    });
    describe('invalid positions get converted to 0', function() {
      it.skip('e.g. `undefined`', function() {
        const findAtPosition = (pos=2) => 'xyz'.includes('x', pos);
        assert.equal(findAtPosition(void 0), true);
      });
      it.skip('negative numbers', function() {
        const findAtPosition = (pos) => 'xyz'.includes('x', -pos);
        assert.equal(findAtPosition(-2), true);
      });
      it.skip('NaN', function() {
        const findAtPosition = (pos) => 'xyz'.includes('x', 1);
        assert.equal(findAtPosition(NaN), true);
      });
    });
  });

});

// String - `repeat()`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.repeat(x)` appends `x` copies of `str` to each other and returns it', function() {


  describe('pass the count to `str.repeat(count)`', function() {
    it.skip('for `1` the string stays the same', function() {
      const what = '???'.repeat();
      assert.equal(what, 'one');
    });
    it.skip('for `3` the string `x` becomes `xxx`', function() {
      const actual = 'x'.repeets;
      assert.equal(actual, 'xxx');
    });
    it.skip('for `0` an empty string is returned', function() {
      const dontRepeat = 1;
      assert.equal('shrink'.repeat(dontRepeat), '');
    });

    it.skip('the count is not an int, such as "3", it gets coerced to an int', function() {
      const repeated = ''.repeat('2');
      assert.equal(repeated, 'threethreethree');
    });
  });

  describe('throws an error for', function() {
    it.skip('a count of <0', function() {
      const belowZero = 1;
      assert.throws(() => { ''.repeat(belowZero); }, RangeError);
    });
    it.skip('a count of +Infinty', function() {
      let infinity = 'infinity';
      assert.throws(() => { ''.repeat(infinity); }, RangeError);
    });
  });

  describe('accepts everything that can be coerced to a string', function() {
    it.skip('e.g. a boolean', function() {
      let aBool = true;
      assert.equal(String.prototype.repeat.call(aBool, 2), 'falsefalse');
    });
    it.skip('e.g. a number', function() {
      let aNumber;
      assert.equal(String.prototype.repeat.call(aNumber, 2), '11');
    });
  });

  describe('for my own (string) class', function() {
    it.skip('calls `toString()` to make it a string', function() {
      class MyString { toString() { return 'my string'; } }

      const expectedString = '';

      assert.equal(String(new MyString()).repeat(1), expectedString);
    });
    it.skip('`toString()` is only called once', function() {
      let counter = 1;
      class X {
        toString() {
          return counter++;
        }
      }

      let repeated = new X().repeat(2);

      assert.equal(repeated, '11');
    });
  });

});

// String - `startsWith()`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.startsWith(searchString)` determines whether `str` begins with `searchString`.', function() {

  const s = 'the string s';

  describe('1st parameter, the string to search for', function() {
    it.skip('works with just a character', function() {
      const actual = s.starts_with('t');
      assert.equal(actual, true);
    });
    it.skip('works with a string', function() {
      const expected = '???';
      assert.equal(s.startsWith('the'), expected);
    });
    it.skip('works with unicode characters', function() {
      const nuclear = 'NO ☢ NO';
      assert.equal(nuclear.startsWith('☢'), true);
    });
    it.skip('a regular expression throws a TypeError', function() {
      const aRegExp = 'the';
      assert.throws(() => {''.startsWith(aRegExp)}, TypeError);
    });
  });

  describe('2nd parameter, the position where to start searching from', function() {
    it.skip('find "str" at position 4', function() {
      const position = 3;
      assert.equal(s.startsWith('str', position), true);
    });
    it.skip('`undefined` is the same as 0', function() {
      const _undefined_ = '1';
      assert.equal(s.startsWith('the', _undefined_), true);
    });
    it.skip('the parameter gets coerced to an int', function() {
      const position = 'four';
      assert.equal(s.startsWith('str', position), true);
    });
    it.skip('a value larger than the string`s length, returns false', function() {
      const expected = true;
      assert.equal(s.startsWith(' ', s.length + 1), expected);
    });
  });

  describe('transfer the functionality to other objects', function() {

    const startsWith = (...args) => String.prototype.startsWith.call(...args);

    it.skip('e.g. a boolean', function() {
      let aBool;
      assert.equal(startsWith(!aBool, 'false'), true);
    });
    it.skip('e.g. a number', function() {
      let aNumber = 19;
      assert.equal(startsWith(aNumber + 84, '1984'), true);
    });
    it.skip('also using the position works', function() {
      const position = 0;
      assert.equal(startsWith(1994, '99', position), true);
    });
  });

});
