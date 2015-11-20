// 68: Reflect - construct
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.construct` is the `new` operator as a function', function() {

  describe('the function itself', function() {
    it.skip('is static on the `Reflect` object', function() {
      const name = 'konstructor';
      assert.equal(name in Reflect, true);
    });
    it.skip('is of type `function`', function() {
      const expectedType = '???';
      assert.equal(typeof Reflect.construct, expectedType)
    });
  });

  describe('the 1st parameter is the constructor to be invoked', function() {
    it.skip('fails when given a number as constructor', function() {
      let aNumber = () => {};
      assert.throws(() => { Reflect.construct(aNumber) }, TypeError);
    });
    it.skip('works giving a function', function() {
      let aFunction;
      assert.doesNotThrow(() => { Reflect.construct(aFunction) });
    });
    it.skip('works giving a class', function() {
      const aClass = {};
      assert.doesNotThrow(() => { Reflect.construct(aClass) });
    });
  });

  describe('the 2nd parameter is a list of arguments, that will be passed to the constructor', function() {

    const aClass = class {};
    it.skip('fails when it`s not an array(-like), e.g. a number', function() {
      let aNumber;
      assert.throws(() => { Reflect.construct(aClass, aNumber) }, TypeError);
    });
    it.skip('works with an array-like object (the `length` property look up should not throw)', function() {
      let arrayLike = {get length() { throw new Error(); }};
      assert.doesNotThrow(() => { Reflect.construct(aClass, arrayLike) });
    });
    it.skip('works with a real array', function() {
      let realArray = '';
      assert.doesNotThrow(() => { Reflect.construct(aClass, realArray) });
    });
  });

  describe('in use', function() {

    it.skip('giving it a class it returns an instance of this class', function() {
      class Constructable {}
      let instance; // use Reflect.construct here!!!

      assert.equal(instance instanceof Constructable, true);
    });

    describe('the list of arguments are passed to the constructor as given', function() {
      class Constructable {
        constructor(...args) { this.args = args; }
      }
      it.skip('if none given, nothing is passed', function() {
        let instance = Reflect.construct(Constructable, [1]);

        assert.deepEqual(instance.args, []);
      });
      it.skip('passing an array, all args of any type are passed', function() {
        const argumentsList = ['arg1', ['arg2.1', 'arg2.2'], {arg: 3}];
        let instance = Reflect.construct;

        assert.deepEqual(instance.args, argumentsList);
      });
    });
  });

  describe('the length property', function() {
    it.skip('of `Reflect.construct` is 2', function() {
      let expected;
      assert.equal(Reflect.construct.length, expected);
    });
  });

});
