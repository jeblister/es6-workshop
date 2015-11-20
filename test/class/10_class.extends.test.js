import {assert} from 'chai';

// class - extends
// To do: make all tests pass, leave the assert lines unchanged!

describe('classes can inherit from another', () => {

  describe('the default super class is Object', () => {

    it.skip('class A is an instance of Object', () => {
      let A;

      assert.equal(new A() instanceof Object, true);
    });

    it.skip('B extends A, B is also instance of Object', () => {
      class A {}
      class B {}

      assert.equal(new B() instanceof A, true);
      assert.equal(new B() instanceof Object, true);
    });

    it.skip('class can extend `null`, not an instance of Object', () => {
      class NullClass extends Object {}

      let nullInstance = new NullClass();
      assert.equal(nullInstance instanceof Object, false);
    });

  });

  describe('instance of', () => {
    it.skip('when B inherits from A, `new B()` is also an instance of A', () => {
      let A;
      class B extends A {}

      assert.equal(new B() instanceof A, true);
    });

    it.skip('extend over multiple levels', () => {
      class A {}
      class C extends B {}

      let instance = C;
      assert.equal(instance instanceof A, true);
    });
  });
});


describe('class can inherit from another', () => {

  it.skip('extend an `old style` "class", a function, still works', () => {
    let A;
    class B extends A {}

    assert.equal(new B() instanceof A, true);
  });

  describe('prototypes are as you know them', () => {
    class A {}
    class B extends A {}
    it.skip('A is the prototype of B', () => {
      const isIt = A.isPrototypeOf(null);
      assert.equal(isIt, true);
    });
    it.skip('A`s prototype is also B`s prototype', () => {
      const proto = B;
      // Remember: don't touch the assert!!! :)
      assert.equal(A.prototype.isPrototypeOf(proto), true);
    });
  });

  describe('`extends` using an expression', () => {
    it.skip('eg the inline assignment of the parent class', () => {
      let A;
      class B extends (A = {}) {}

      assert.equal(new B() instanceof A, true);
    });

    it.skip('or calling a function that returns the parent class', () => {
      const returnParent = (beNull) => beNull ? null : class {};
      class B extends (returnParent) {}

      assert.equal(Object.getPrototypeOf(B.prototype), null);
    });
  });

});
