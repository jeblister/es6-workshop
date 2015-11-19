// import {expect} from 'chai';
//
// describe('Object Literal', () => {
//   it.skip('can use shorthand for property names', () => {
//
//     function createMonster(name, power) {
//
//       // Using NEW Object Literal Syntax, return a literal that will allow the tests to pass
//       return {
//         type: 'Monster',
//         name,
//         power,
//         attack(target){
//           console.log('RAAAARRRR!!! #breathesfire');
//           return `${this.name} attacked ${target.name}`;
//         }
//       };
//     }
//
//     var godzilla = createMonster('Godzilla', 1000);
//     var mechaGodzilla = createMonster('MechaGodzilla', 5000);
//
//     expect(godzilla.name).to.equal('Godzilla');
//     expect(godzilla.power).to.equal(1000);
//     expect(godzilla.attack(mechaGodzilla)).to.equal('Godzilla attacked MechaGodzilla');
//   });
//
//
// });


import {expect, assert} from 'chai';

// object-literals - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('The object literal allows for new shorthands', () => {

  const x = 1;
  const y = 2;

  describe('with variables', () => {
    it.skip('the short version for `{x: x}` is {x}', () => {
      const short = {y};
      assert.deepEqual(short, {y: y});
    });
    it.skip('works with multiple variables too', () => {
      const short = {x, y};
      assert.deepEqual(short, {x: x, y: y});
    });
  });

  describe('with methods', () => {

    const func = () => func;

    it.skip('using the name only uses it as key', () => {
      const short = {func};
      assert.deepEqual(short, {func: func});
    });

    it.skip('a different key must be given explicitly, just like before ES6', () => {
      const short = {[otherKey]: func};
      assert.deepEqual(short, {otherKey: func});
    });

    it.skip('inline functions, can written as `obj={func(){}}` instead of `obj={func:function(){}}`', () => {
      const short = {
        inlineFunc(){return 'I am inline'}
      };
      assert.deepEqual(short.inlineFunc(), 'I am inline');
    });
  });

});

// object-literal - computed properties
// To do: make all tests pass, leave the assert lines unchanged!

describe('Object literal properties may be computed values', () => {

  it.skip('a computed property `x` needs to be surrounded by `[]`', () => {
    const propertyName = 'x';
    const obj = {[propertyName]: 1};
    assert.equal(obj.x, 1);
  });

  it.skip('can also get a function assigned', () => {
    const key = 'func';
    const obj = {[key]: function(){return 'seven'}};
    assert.equal(obj.func(), 'seven');
  });

  it.skip('the key may also be the result of a function call', () => {
    const getName = () => 'propertyName';
    const obj = {[getName()]: function () {return 'seven'}};
    assert.equal(obj.propertyName(), 'seven');
  });

  it.skip('the key can also be constructed by an expression', () => {
    const what = 'Name';
    const obj = {['property' + what]: true};
    assert.equal('propertyName' in obj, true);
  });

  it.skip('accessor keys can be computed names too', () => {
    const obj = {
      ['key']() {return 1;}
    };
    assert.equal(obj.key, 1);
  });
});

// object-literal - getter
// To do: make all tests pass, leave the assert lines unchanged!

describe('An object literal can also contain getters', () => {

  it('just prefix the property with `get` (and make it a function)', function() {
    const obj = {
      get x() { return 'ax'; }
    };

    assert.equal(obj.x, 'ax');
  });

  it('must have NO parameters', function() {
    const obj = {
      get x() { return 'ax'; }
    };

    assert.equal(obj.x, 'ax');
  });


  it('can be a computed property (an expression enclosed in `[]`)', function() {
    const keyName = 'x';
    const obj = {
      get [keyName]() { return 'ax'; }
    };

    assert.equal(obj.x, 'ax');
  });

  it('can be removed using delete', function() {
    const obj = delete {
      get x() { return 'ax'; }
    };

    assert.equal(obj.x, void 0);
  });

  // The following dont seem to work in the current transpiler version
  // but should be correct, as stated here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
  // It might be corrected later, new knowledge welcome.

  it('must not overlap with a pure property', function() {
   const obj = {
     x: 1,
     get x() { return 'ax'; }
   };

   assert.equal(obj.x, 'ax');
  });

  it('multiple `get` for the same property are not allowed', function() {
   const obj = {
     x: 1,
     get x() { return 'ax1'; },
     get x() { return 'ax'; }
   };

   assert.equal(obj.x, 'ax');
  });
});

// 67: object-literal - setter
// To do: make all tests pass, leave the assert lines unchanged!

describe('An object literal can also contain setters', () => {

  describe('defining: a setter', function() {
    it('by prefixing the property with `set` (and make it a function)', function() {
      let theX = null;
      const obj = {
        set x(newX) { theX = newX; }
      };

      obj.x = 'the new X';
      assert.equal(theX, 'the new X');
    });
    it('must have exactly one parameter', function() {
      let setterCalledWith = void 0;
      const obj = {
        set x(y) { // <<<<=== it's not a setter yet!
          if (arguments.length === 1) {
            setterCalledWith = arguments[0];
          }
        }
      };

      assert.equal(obj.x = 'new value', setterCalledWith);
    });

  });

  describe('working with/on the setter', function() {

    it('you can use `delete` to remove the property (including it`s setter)', function() {
      let setterCalled = false;
      const obj = {
        set x(param) { setterCalled = true; }
      };

      // delete the property x here, to make the test pass

      delete obj.x;
      assert.equal(setterCalled, false);
    });

  });

  // TODO
  // The following dont seem to work in the current transpiler version
  // but should be correct, as stated here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
  // It might be corrected later, new knowledge welcome.
  // it.skip('must not overlap with a pure property', function() {
  //   const obj = {
  //     x: 1,
  //     set x(val) { return 'ax'; }
  //   };
  //   assert.equal(obj.x, 'ax');
  // });
  // it.skip('multiple `set` for the same property are not allowed', function() {
  //   const obj = {
  //     x: 1,
  //     set x(v) { return 'ax'; },
  //     set x(v) { return 'ax1'; }
  //   };
  //   assert.equal(obj.x, 'ax');
  // });
});

describe('Object Literal', () => {
  it('can use shorthand for property names', () => {

    function createMonster(name, power) {

      // Using NEW Object Literal Syntax, return a literal that will allow the tests to pass
      return {
        type: 'Monster',
        name: name,
        power: power,
        attack: function (target){
          console.log('RAAAARRRR!!! #breathesfire');
          return `${this.name} attacked ${target.name}`;
        }
      };
    }

    var godzilla = createMonster('Godzilla', 1000);
    var mechaGodzilla = createMonster('MechaGodzilla', 5000);

    expect(godzilla.name).to.equal('Godzilla');
    expect(godzilla.power).to.equal(1000);
    expect(godzilla.attack(mechaGodzilla)).to.equal('Godzilla attacked MechaGodzilla');
  });


});
