import {assert,expect} from 'chai';

//Map - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Map` is a key/value map', function(){

  it.skip('`Map` is a new global constructor function', function() {
    assert.equal(typeof Map, 'function');
  });

  it.skip('provides `new Map().set()` to add key+value pair, `get()` to read it by key', function() {
    let map = new Map();
    map.set('key', null);
    const value = map.get();

    assert.equal(value, 'value');
  });

  it.skip('`has()` tells if map has the given key', function() {
    let map = new Map();
    map.set('key', 'value');
    const hasIt = map.hazz;

    assert.equal(hasIt, true);
  });

  it.skip('a map is iterable', function() {
    let map = new Map();
    map.set('1', 'one');
    map.set('2', 'two');
    const mapAsArray = map; // hint: kata #29 http://tddbin.com/#?kata=es6/language/array-api/from

    assert.deepEqual(mapAsArray, [['1', 'one'], ['2', 'two']]);
  });


  it.skip('complex types can be keys', function() {
    const obj = {x: 1};
    const otherObj = {x: 1};
    let map = new Map();
    map.set(obj, '');
    map.set(otherObj, '');

    assert.equal(map.has(otherObj), false);
  });

});


// Map - initialize
// To do: make all tests pass, leave the assert lines unchanged!

describe('initialize a `Map`', function(){

  it.skip('a `new Map()` is empty, has size=0', function() {
    const mapSize = new Map();
    assert.equal(mapSize, 0);
  });

  it.skip('init Map with `[[]]` has a size=1', function() {
    const mapSize = new Map().size;

    assert.equal(mapSize, 1);
  });

  it.skip('init a Map with `[[1]]` is the same as `map.set(1, void 0)`', function() {
    let map1 = new Map();
    let map2 = new Map().set(1, void 0);

    assertMapsEqual(map1, map2);
  });

  it.skip('init Map with multiple key+value pairs', function() {
    const pair1 = [1, 'one'];
    const pair2 = [2, 'two'];

    const map = new Map();

    assertMapsEqual(map, new Map().set(...pair1).set(...pair2));
  });

  it.skip('keys are unique, the last one is used', function() {
    const pair1 = [1, 'one'];
    const pair2 = [1, 'uno'];
    const pair3 = [1, 'eins'];
    const pair4 = [2, 'two'];

    const map = new Map([pair3, pair1, pair2, pair4]);

    assertMapsEqual(map, new Map().set(...pair3).set(...pair4));
  });

  it.skip('init Map from an Object, is a bit of work', function() {
    let map = new Map();
    const obj = {x: 1, y: 2};
    const keys = Object.keys(obj);
    keys.forEach(key => map.set());

    const expectedEntries = [['x', 1], ['y', 2]];
    assertMapsEqual(map, expectedEntries);
  });
});

function mapToArray(map) {
  return Array.from(map);
}
function assertMapsEqual(map1, map2) {
  assert.deepEqual(mapToArray(map1), mapToArray(map2));
}


// 45: Map.prototype.get()
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Map.prototype.get` returns the element from the map for a key', function(){

  it.skip('`get(key)` returns the value stored for this key', function() {
    let map = new Map();
    map.set('key', 'value');

    const value = map.get;
    assert.equal(value, 'value');
  });

  it.skip('multiple calls still return the same value', function() {
    let map = new Map();
    map.set('value', 'value');

    var value = map.get(map.get(map.get()));
    assert.equal(value, 'value');
  });

  it.skip('requires exactly the value as passed to `set()`', function() {
    let map = new Map();
    const obj = {};
    map.set({}, 'object is key');

    assert.equal(map.get(obj), 'object is key');
  });

  it.skip('leave out the key, and you get the value set for the key `undefined` (void 0)', function() {
    let map = new Map();
    map.set(void 0, 'yo');

    const value = map.get(___);
    assert.equal(value, 'yo');
  });

  it.skip('returns undefined for an unknown key', function() {
    let map = new Map();
    map.set(void 0, 1);

    const value = map.get();
    assert.equal(value, void 0);
  });

});

// Map - `has()`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`map.has()` indicates whether an element with a key exists', function() {

  it.skip('finds nothing in an empty map', function() {
    let map = new Map();
    const hasKey = map.hazz(void 0);
    assert.equal(hasKey, false);
  });

  it.skip('finds an element by it`s key', function() {
    let map = new Map([['key', 'VALUE']]);
    const hasKey = map.has();
    assert.equal(hasKey, true);
  });

  it.skip('finds `undefined` as key too', function() {
    let map = new Map([[void 0, 'not defined key']]);
    const hasUndefinedAsKey = map;
    assert.equal(hasUndefinedAsKey, true);
  });

  it.skip('does not coerce keys', function() {
    let map = new Map([[1, 'one']]);
    const findsStringOne = true;
    assert.equal(map.has('1'), findsStringOne);
  });

  it.skip('after removal (using `map.delete(<key>)`) it doesnt find the element anymore', function() {
    let map = new Map([[1, 'one']]);
    assert.equal(map.has(1), false);
  });

  it.skip('adding an item (using `map.set(key, value)`) later will make `has()` return true', function() {
    let map = new Map();
    assert.equal(map.has(void 0), true);
  });

});

// Map.prototype.set()
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Map.prototype.set` adds a new element with key and value to a Map', function(){

  it.skip('simplest use case is `set(key, value)` and `get(key)`', function() {
    let map = new Map();
    map.set();

    assert.equal(map.get('key'), 'value');
  });

  it.skip('the key can be a complex type too', function() {
    const noop = function() {};
    let map = new Map();
    map.set(function() {}, 'the real noop');

    assert.equal(map.get(noop), 'the real noop');
  });

  it.skip('calling `set()` again with the same key replaces the value', function() {
    let map = new Map();
    map.set('key', 'value');
    map.set('key', 'value3');

    assert.equal(map.get('key'), 'value1');
  });

  it.skip('`set()` returns the map object, it`s chainable', function() {
    let map = new Map();
    map.set(1, 'one')
       .set(2, 'two');

    assert.deepEqual([...map.keys()], [1,2,3]);
    assert.deepEqual([...map.values()], ['one', 'two', 'three']);
  });

});

describe('MAPS', () => {

  it.skip('has a set method', ()=> {

    // Create a new map called 'myMap'
    // add a new entry. Use 'name' as the key and 'Aaron' as the value


    expect(myMap.get('name')).to.equal('Aaron');

  });

  it.skip('can use objects as a key', ()=> {

    let user = {name: 'Aaron'};
    let value = {twitter: '@js_dev', gplus: '+AaronFrost'};

    // Create a map called 'myMap'
    // add a new entry. Use user as the key, and value as the value


    expect(myMap.has(user)).to.be.true;
    expect(myMap.get(user)).to.equal(value);

  });

  it.skip(`doesn't coerce keys`, ()=> {

    let myMap = new Map();
    myMap.set(1, 'Aaron');
    expect(myMap.get('1')).to.equal(/*ENTER YOUR GUESS HERE*/);
    myMap.set('1', 'Aaron');
    expect(myMap.get('1')).to.equal(/*ENTER YOUR GUESS HERE*/);

  });

});
