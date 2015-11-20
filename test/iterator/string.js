// 38: iterator/iterable - string.
// The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite).
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// To do: make all tests pass, leave the assert lines unchanged!

describe('string is a built-in iterable object', function() {

  const s = 'abc';

  describe('string is iterable', function() {
  it.skip('the string`s object key `Symbol.iterator` is a function', function() {
      const isA = s;
      assert.equal(isA, 'function');
    });
  it.skip('use `Array.from()` to make an array out of any iterable', function(){
      const arr = s;
      assert.deepEqual(arr, ['a', 'b', 'c']);
    });
  });

  describe('a string`s iterator', function() {
    let iterator;
    beforeEach(function() {
      iterator = s[Symbol.iterator]();
    });

  it.skip('has a special string representation', function(){
      const description = iterator.to____();
      assert.equal(description, '[object String Iterator]');
    });

  it.skip('`iterator.next()` returns an object according to the iterator protocol', function(){
      const value = iterator.___();
      assert.deepEqual(value, {done: false, value: 'a'});
    });

  it.skip('the after-last call to `iterator.next()` says done=true, no more elements', function(){
      iterator.next();
      assert.equal(iterator.next().done, true);
    });
  });

});
