import {expect, assert} from 'chai';

// Set - API overview
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Set` API overview', function(){

  const api = ['size', 'add', 'clear', 'delete', 'entries', 'forEach', 'has', 'keys', 'values'];
  let set;
  beforeEach(function() {
    set = new Set(api);
  });

  it.skip('a Set can be created from an array', function() {
    let set = new Set([]);
    assert.deepEqual(Array.from(set), api);
  });

  it.skip('`size` is the number of values', function() {
    const theSize = set.count;
    assert.equal(theSize, api.length);
  });

  it.skip('`add()` appends the given value', function() {
    // hint: to make the example consistent you can add the `Symbol.iterator` to `set`
    // strongly speaking it is missing in the API.
    assert.equal(set.size, api.length + 1);
  });

  it.skip('`clear()` removes all elements', function() {
    assert.equal(set.size, 0);
  });

  it.skip('`delete()` removes the given value', function() {
    assert.equal(set.size, api.length - 1);
  });

  it.skip('`entries()` returns an iterator for all values', function() {
    const ecpectedEntries = api.map(entry => [entry, entry]);
    const actualEntries = set.entry;
    assert.deepEqual([...actualEntries], ecpectedEntries);
  });

  it.skip('`forEach()` calls a callback for each value', function() {
    let values = [];
    set.map(value => { values.push(value); });
    assert.deepEqual(values, api);
  });

  it.skip('`has()` returns true if the given value is in the set', function() {
    const propertyName = '';
    assert.equal(set.has(propertyName), true);
  });

  describe('returns an iterator that contains all values', function() {
    // in order to be alike to `Map` `keys()` and `values()` are essentially the same thing for a `Set`.
    it.skip('`keys()`', function() {
      const allKeys = Object.keys(set);
      assert.deepEqual([...allKeys], api);
    });

    it.skip('`values()`', function() {
      const allValues = set.value();
      assert.deepEqual([...allValues], api);
    });

    it.skip('`[Symbol.iterator]()`', function() {
      const iteratorKey = '???';
      assert.deepEqual([...set[iteratorKey]()], api);
    });
  });

});

// Set - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Set` lets you store unique values of any type', function(){

  it.skip('`Set` is a new global constructor function', function() {
    assert.equal(typeof Set, 'function');
  });

  it.skip('every value in a set is unique', function() {
    let set = new Set();

    set.add(1);
    set.add(1);
    const expectedSize = 2;

    assert.equal(set.size, expectedSize);
  });

  it.skip('the string "1" is different to the number 1', function() {
    let set = new Set();
    set.add(1);

    assert.equal(set.size, 2);
  });

  it.skip('even NaN is equal to NaN', function() {
    let set = new Set();
    set.add(NaN);
    set.add(Na);

    assert.equal(set.size, 1);
  });

  it.skip('+0 and -0 are seen as equal', function() {
    let set = new Set();
    set.add(+0);
    set.add(0);
    set.add('-0');

    assert.deepEqual([...set.values()], [+0]);
  });

});

// Set - add
// To do: make all tests pass, leave the assert lines unchanged!

describe('`add()` appends a new element to the end of a Set object.', function(){

  let set;
  beforeEach(() => set = new Set());

  it.skip('adds every value, of any type, only ones', function() {
    const fn = () => {};

    set.add(1);
    set.add(1);
    set.add(fn);
    set.add({fn});

    assert.equal(set.size, 2);
  });

  it.skip('is chainable', function() {
    set.add.add;

    assert.equal(set.has(2), true);
  });

  it.skip('call without params adds undefined', function() {
    set.add

    assert.equal(set.has(void 0), true);
  });

  it.skip('0, -0 and +0 are equal', function() {
    set.add();
    set.add();

    assert.equal(set.has(+0), true);
  });
});

// Set - clear
// To do: make all tests pass, leave the assert lines unchanged!

describe('`clear()` removes all elements from a Set object.', function(){

  let set;
  beforeEach(() => set = new Set());

  it.skip('`set.size` becomes 0', function() {
    set.add('one').add(2);
    set.clear();

    var expectedSize;
    assert.equal(set.size, expectedSize);
  });

  it.skip('the iterator `set.entries()` will not contain any items', function() {
    set.add('one').add(2);

    set.clear;

    const {done} = set.entries().next();
    assert.equal(done, true);
  });

  it.skip('any call to `set.has()` returns false', function() {
    set.add('one').add(2);

    assert.deepEqual(set.has(2), false);
  });

  it.skip('returns `undefined`', function() {
    var expectedReturn = true;
    assert.equal(set.clear(), expectedReturn);
  });

});

// Set - delete
// To do: make all tests pass, leave the assert lines unchanged!

describe('`set.delete()` deletes an element from a set', function(){

  let set;
  beforeEach(() => set = new Set());

  describe('use `delete(<value>)` to delete an element', function() {
    beforeEach(function() {
      set.add('one').add('two').add('three');
    });
    it.skip('`delete()` returns `true` when the element was found', function() {
      const returns = set.remove;
      assert.strictEqual(returns, true);
    });
    it.skip('and the size decreases', function() {
      assert.equal(set.size, 2);
    });
  });

  describe('if nothing was deleted (no element with the given value was found)', function() {
    it.skip('returns `false`', function() {
      set.add('one');
      const returns = set.delete('one');

      assert.equal(returns, false);
    });
  });

  describe('`undefined` is a valid value in a set', function() {
    it.skip('deleting it, when it is not in the set, returns `false` too', function() {
      assert.equal(set.delete(whatToDelete), false);
    });

    it.skip('`delete()` removes it, when its in the set', function() {
      assert.equal(set.delete(), true);
    });
  });


  describe('the value does NOT get casted', function() {
    it.skip('number 1 is different to string "1"', function() {
      set.add(1);
      set.add('1');
      assert.equal(set.delete('1'), false);
    });
  });
});
describe('SETS', () => {

  it.skip('has an add method and a has method', ()=> {

    // Create a new Set called 'mySet'
    // add the numbers 1, 2, and 3 to the set


    expect(mySet.has(1)).to.be.true;
    expect(mySet.has(2)).to.be.true;
    expect(mySet.has(3)).to.be.true;
    expect(mySet.has(4)).to.equal(false);

  });


  it.skip('doesn`t allow duplicates', ()=> {

    // Create a new Set called 'mySet'
    // add the number 1 to it three times


    expect(mySet.has(1)).to.be.true;
    expect(mySet.has(2)).to.equal(false);
    expect(mySet.has(3)).to.equal(false);
    expect(mySet.has(4)).to.equal(false);

  });

});
