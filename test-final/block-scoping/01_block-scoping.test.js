import {assert, expect} from 'chai';
// block scope - let
// To do: make all tests pass, leave the asserts unchanged!

describe('`let` restricts the scope of the variable to the current block', () => {

  describe('`let` vs. `var`', () => {

    it('`var` works as usual', () => {
      if (true) {
        var varX = true;
      }
      assert.equal(varX, true);
    });

    it('`let` restricts scope to inside the block', () => {
      if (true) {
        let letX = true;
      }
      assert.throws(() => console.log(letX));
    });

  });

  describe('`let` usage', () => {

    it('`let` use in `for` loops', () => {
      let obj = {x: 1};
      for (let key in obj) {}
      assert.throws(() => console.log(key));
    });

    it('create artifical scope, using curly braces', () => {
      {
        let letX = true;
      }
      assert.throws(() => console.log(letX));
    });

  });

});
//block scope - const
// To do: make all tests pass, leave the asserts unchanged!

describe('`const` is like `let` plus read-only', () => {

  describe('scalar values are read-only', () => {

    it('number', () => {
      const constNum = 0;
      const Num = 1;
      assert.equal(constNum, 0);
    });

    it('string', () => {
      const constString = 'I am a const';
      // constString = 'Cant change you?';
      assert.equal(constString, 'I am a const');
    });

  });

  const notChangeable = 23;

  it('const scope leaks too', () => {
    assert.equal(notChangeable, 23);
  });

  describe('complex types are NOT fully read-only', () => {

    it('array', () => {
      const arr = [42, 23];
      arr[1] = 0;
      assert.equal(arr[0], 42);
    });

    it('object', () => {
      const obj = {x: 1};
      obj.x = 3;
      assert.equal(obj.x, 3);
    });

  });

});

describe('Block Scoped Variables', () => {

  it('can be used in place of `var`', () => {
    // Declare 'bandName' using 'let'
    // Declare 'isBestBand' using 'let'
    let bandName ='Queen' ,isBestBand=true;

    expect(bandName).to.equal('Queen');
    expect(isBestBand).to.be.true;
  });


  it('can modify the value of a `let` variable', () => {

    // Delcare 'releaseName' using 'let', setting the value to 'ES6'
    let releaseName= 'ES6';
    // Change value of 'releaseName' to be `ES2015`, the new name for ES6
    releaseName = 'ES2015';

    expect(releaseName).to.equal('ES2015');
  });

  it('cannot modify the value of a `const` variable', () => {

    const releaseName = 'ES6';

    // This doesn't even transpile, so we can't actually test this...
    // once you've changed the `var` above to `const`, comment out the line below
  //  releaseName = 'ES2015';
    expect(releaseName).to.equal('ES6');
  });


  it('is trapped inside of an `if` statement', () => {

    if (true) {
      // Change to `var` to `let`, so that 'b' is scoped inside of the if-statement
      let b = 1;
    }

    expect(()=> console.log(b)).to.throw('b is not defined');
  });


  it('prevents loop counters from hoisting', () => {

    function doLoop() {
      // Change loop counter to `let` so that it is trapped inside of the loop, and can't be returned.
      for (let i = 0; i < 10; i++) {

      }
      return i;
    }

    expect(doLoop).to.throw('i is not defined');
  });


  it('means that we can start using block statements', () => {

    // BLOCK STATEMENT
    {
      // Change to `const` declaration
      const d = 2;
    }

    expect(()=> console.log('d', d)).to.throw('d is not defined');
  });

});
