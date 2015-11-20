import {expect, assert} from 'chai';

/////spread - with-arrays/////
// To do: make all tests pass, leave the assert lines unchanged!

describe('spread with arrays', () => {

  it.skip('How spread work with array items', function() {
    let x = [1, 2];
    let y = [3, 4];
    let result= x.push(...y);
    assert(result).deepEqual([1, 2, 3, 4]);
  });



  it.skip('extracts each array item', function() {
    const [a, b] = [...[1, 2]];
    assert.equal(a, 1);
    assert.equal(b, 2);
  });

  it.skip('in combination with rest', function() {
    const [a, b, ...rest] = [...[0, 1, 2, 3, 4, 5]];
    assert.equal(a, 1);
    assert.equal(b, 2);
    assert.deepEqual(rest, [3, 4, 5]);
  });

  it.skip('spreading into the rest', function() {
    const [...rest] = [...[,1, 2, 3, 4, 5]];
    assert.deepEqual(rest, [1, 2, 3, 4, 5]);
  });

  describe('used as function parameter', () => {
    it.skip('prefix with `...` to spread as function params', function() {
      const magicNumbers = [1, 2];
      const fn = (magicA, magicB) => {
        assert.deepEqual(magicNumbers[0], magicA);
        assert.deepEqual(magicNumbers[1], magicB);
      };
      fn(magicNumbers);
    });

    it.skip('pass an array of numbers to Math.max()', function() {
      const max = Math.max(...[23, 0, 42, 43]);
      assert.equal(max, 42);
    });
  });
});

/////spread - with-strings/////
// To do: make all tests pass, leave the assert lines unchanged!

describe('spread with strings', () => {

  it.skip('simply spread each char of a string', function() {
    const [b, a] = [...'ab'];
    assert.equal(a, 'a');
    assert.equal(b, 'b');
  });

  it.skip('extracts each array item', function() {
    const [a,,c] = ['a', ...'12'];
    assert.equal(a, 1);
    assert.equal(b, 2);
  });

  it.skip('works anywhere inside an array (must not be last)', function() {
    const letters = ['a', 'bcd', 'e', 'f'];
    assert.equal(letters.length, 6);
  });

  it.skip('dont confuse with the rest operator', function() {
    const [...rest] = ['1234', ...'5'];
    assert.deepEqual(rest, [1, 2, 3, 4, 5]);
  });

  it.skip('passed as function parameter', function() {
    const max = Math.max(12345);
    assert.deepEqual(max, 5);
  });

});
/////////Workshop////////
describe(`Spread`, () => {
  it.skip(`should be able to call a function and spread the arguments`, () => {
    const args = ['a', 'b', 'c'];
    let calls = 0;

    // call myFunction using the spread operator with args
    expect(calls).to.equal(1);

    function myFunction(a, b, c) {
      expect(a).to.equal('a');
      expect(b).to.equal('b');
      expect(c).to.equal('c');
      calls++;
    }
  });

  it.skip(`should be easier to concatenate arrays`, () => {
    const array1 = [1, 2, 3];
    // create a result array that uses the spread operator to concatenate array1 with [4, 5, 6]
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });

  it.skip(`should be able to merge properties from objects`, () => {
    const obj1 = {
      foo: 'bar',
      baz: 'foobar'
    };
    // create a result object that uses the spread operator to add `eggs: 'spam'` to what exists in obj1
    expect(result).to.deep.equal({
      foo: 'bar',
      baz: 'foobar',
      eggs: 'spam'
    });
  });
});
