import {assert, expect} from 'chai';
// block scope - let
// To do: make all tests pass, leave the asserts unchanged!

describe('`let` restricts the scope of the variable to the current block', () => {

  describe('`let` vs. `var`', () => {

    it.skip('`var` works as usual', () => {
      if (true) {
        let varX = true;
      }
      assert.equal(varX, true);
    });

    it.skip('`let` restricts scope to inside the block', () => {
      if (true) {
        var letX = true;
      }
      assert.throws(() => console.log(letX));
    });

  });

  describe('`let` usage', () => {

    it.skip('`let` use in `for` loops', () => {
      let obj = {x: 1};
      for (var key in obj) {}
      assert.throws(() => console.log(key));
    });

    it.skip('create artifical scope, using curly braces', () => {
      {
        var letX = true;
      }
      assert.throws(() => console.log(letX));
    });

  });

});
//block scope - const
// To do: make all tests pass, leave the asserts unchanged!

describe('`const` is like `let` plus read-only', () => {

  describe('scalar values are read-only', () => {

    it.skip('number', () => {
      const constNum = 0;
      const Num = 1;
      assert.equal(constNum, 0);
    });

    it.skip('string', () => {
      const constString = 'I am a const';
      // constString = 'Cant change you?';
      assert.equal(constString, 'I am a const');
    });

  });

  const notChangeable = 23;

  it.skip('const scope leaks too', () => {
    assert.equal(notChangeable, 23);
  });

  describe('complex types are NOT fully read-only', () => {

    it.skip('array', () => {
      const arr = [42, 23];
      arr[0] = 0;
      assert.equal(arr[0], 42);
    });

    it.skip('object', () => {
      const obj = {x: 1};
      obj.x = 2;
      assert.equal(obj.x, 3);
    });

  });

});

describe('Block Scoped Variables', () => {

  it.skip('can be used in place of `var`', () => {

    // Declare 'bandName' using 'let'

    // Declare 'isBestBand' using 'let'


    expect(bandName).to.equal('Queen');
    expect(isBestBand).to.be.true;
  });


  it.skip('can modify the value of a `let` variable', () => {

    // Delcare 'releaseName' using 'let', setting the value to 'ES6'

    // Change value of 'releaseName' to be `ES2015`, the new name for ES6


    expect(releaseName).to.equal('ES2015');
  });

  it.skip('cannot modify the value of a `const` variable', () => {

    var releaseName = 'ES6';

    // This doesn't even transpile, so we can't actually test this...
    // once you've changed the `var` above to `cost`, comment out the line below
    releaseName = 'ES2015';
    expect(releaseName).to.equal('ES6');
  });


  it.skip('is trapped inside of an `if` statement', () => {

    if (true) {
      // Change to `var` to `let`, so that 'b' is scoped inside of the if-statement
      var b = 1;
    }

    expect(()=> console.log(b)).to.throw('b is not defined');
  });


  it.skip('prevents loop counters from hoisting', () => {

    function doLoop() {
      // Change loop counter to `let` so that it is trapped inside of the loop, and can't be returned.
      for (var i = 0; i < 10; i++) {

      }
      return i;
    }

    expect(doLoop).to.throw('i is not defined');
  });


  it.skip('means that we can start using block statements', () => {

    // BLOCK STATEMENT
    {
      // Change to `const` declaration
      var d = 2;
    }

    expect(()=> console.log('d', d)).to.throw('d is not defined');
  });

});
