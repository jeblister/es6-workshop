import {assert} from 'chai';

// array - `Array.prototype.find`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.find` makes finding items in arrays easier', () => {

  it.skip('takes a compare function', function() {
    const found = [false, true].find(true);

    assert.equal(found, true);
  });

  it.skip('returns the first value found', function() {
    const found = [0, 1].find(item => item > 1);

    assert.equal(found, 2);
  });

  it.skip('returns `undefined` when nothing was found', function() {
    const found = [1, 2, 3].find(item => item === 2);

    assert.equal(found, void 0);
  });

  it.skip('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const found = [bob, alice].find(({name:{length}}) => length);

    assert.equal(found, alice);
  });

});
