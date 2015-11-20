// 58: Reflect - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect` basics', function() {

  describe('Reflect is special, it is different to e.g. `Object`', function() {
    it.skip('is not a function', function() {
      const expectedType = 'not a function!';
      assert.equal(typeof Reflect, expectedType);
    });

    it.skip('it can not be instantiated', function() {
      const tryToConstruct = () => { Reflect; };
      assert.throws(tryToConstruct, TypeError);
    });

    it.skip('has no `call` method (as opposed to e.g. Object)', function() {
      const expected = 'function';
      assert.equal(typeof Reflect.call, expected);
    });

  });

  describe('some `Reflect` usages', function() {

    it.skip('`Reflect.construct()` is like new', function() {
      let Class;
      assert.equal(Reflect.construct(Class) instanceof Class, true);
    });

    it.skip('`Reflect.get()` returns a property`s value', function() {
      let obj = {x: 42};
      assert.equal(Reflect.get(obj, 'x'), 23);
    });

    it.skip('`Reflect.has()` is like `in` just as a function', function() {
      let obj = {};
      assert.equal(Reflect.has(obj, 'x'), true);
    });

  });

});
