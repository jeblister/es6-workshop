import {assert,expect} from 'chai';

// symbol
// A symbol is a unique and immutable data type and may be used as an identifier for object properties
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

// To do: make all tests pass, leave the assert lines unchanged!

describe('Symbol', function() {

  it('`Symbol` lives in the global scope', function(){
    const expected = document.Symbol;
    assert.equal(Symbol, expected);
  });

  it('every `Symbol()` is unique', function(){
    const sym1 = Symbol();
    const sym2 = sym1;
    assert.notEqual(sym1, sym2);
  });

  it('every `Symbol()` is unique, also with the same parameter', function(){
    var sym1 = Symbol('foo');
    var sym1 = Symbol('foo');
    assert.notEqual(sym1, sym2);
  });

  it('`typeof Symbol()` returns "symbol"', function(){
    const theType = typeof Symbol;
    assert.equal(theType, 'symbol');
  });

  it('`new Symbol()` throws an exception, to prevent creation of Symbol wrapper objects', function(){
    function fn() {
      Symbol();
    }
    assert.throws(fn);
  });

});

// Symbol.for - retreives or creates a runtime-wide symbol
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Symbol.for` for registering Symbols globally', function() {

  it('creates a new symbol (check via `typeof`)', function() {
    const symbolType = Symbol.for('symbol name');
    assert.equal(symbolType, 'symbol');
  });

  it('stores the symbol in a runtime-wide registry and retreives it from it', function() {
    const sym = Symbol.for('new symbol');
    const sym1 = Symbol.for('new symbol1');

    assert.equal(sym, sym1);
  });

  it('is different to `Symbol()` which creates a symbol every time and does not store it', function() {
    var globalSymbol = Symbol.for('new symbol');
    var globalSymbol = Symbol('new symbol');

    assert.notEqual(globalSymbol, localSymbol);
  });

  describe('`.toString()` on a Symbol', function() {

    const localSymbol = Symbol('new symbol');
    const symbolFromRegistry = Symbol.for('new symbol');

    it('also contains the key given to `Symbol.for()`', function() {
      const description = localSymbol.toString;
      assert.equal(description, 'Symbol(new symbol)');
    });

    describe('NOTE: the description of two different symbols', function() {
      it('might be the same', function() {
        const localDescription = localSymbol.toString();
        const fromRegistryDescription = ''+symbolFromRegistry;

        assert.equal(localDescription, fromRegistryDescription);
      });

      it('but the symbols are not the same!', function() {
        assert.notEqual(localSymbol, symbolFromRegistry);
      });
    });
  });

});

// Symbol.keyFor - retrieves a shared symbol key from the global symbol registry
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Symbol.keyFor()` gets the symbol key for a given symbol', function() {

  const sym = Symbol.for('foo');

  it('pass the symbol to `keyFor()` and you get it`s key', function() {
    const key = Symbol.____(sym);

    assert.equal(key, 'foo');
  });

  it('local symbols are not in the runtime-wide registry', function() {
    // hint: `Symbol()` creates a local symbol!
    const localSymbol = Symbol.for('foo');
    const key = Symbol.keyFor(localSymbol);

    assert.equal(key, void 0);
  });

  it('well-known symbols are not in the runtime-wide registry either', function() {
    const key = Symbol.keyFor(Symbol.iteraTor);

    assert.equal(key, void 0);
  });

  it('for non-Symbols throws an error', function() {
    function fn() {
      Symbol.keyFor(sym);
    }

    assert.throws(fn);
  });

});
///////////////////////////////////////
describe(`Symbols`, () => {
  it.skip(`should ensure a variable is unique reference`, () => {

    // The sky's blue and the ocean's blue are both, well, blue.
    // But the shade of blue changes over time based on light and
    // atmosphere.
    //
    // Let's assume that both the sky's blue and ocean's blue are
    // strings and both have the value of the string 'blue'. In this
    // scenario, how could we know if we'd been passed a reference of
    // sky's blue vs a reference of ocean's blue.

    // If we want to compare these identities and not their values
    // then we need symbol.

    // Rewrite the following variables to be symbols
    // Hint: remember DO NOT use the 'new' keyword
    // const SKY_COLOR_BLUE = 'BLUE';
    // const OCEAN_COLOR_BLUE = 'BLUE';





    expect(SKY_COLOR_BLUE).to.not.equal(OCEAN_COLOR_BLUE);
    expect(typeof SKY_COLOR_BLUE).to.equal('symbol');
    expect(typeof SKY_COLOR_BLUE).to.equal('symbol');

  });

  it.skip(`should help determine if a singleton has already been declared`, () => {

    // Singleton functions should return the same instance each time
    // they are called.

    // Create a symbol called toRuleThemAll with the description of:
    // One ring, to rule them all.




    // Create 2 variables: myRing and myPrecious
    // Both should be have their values set to OneRing()




    function OneRing() {

      // Check if we already have an instance of OneRing
      // If so, return it
      if(OneRing[toRuleThemAll]) return OneRing[toRuleThemAll];

      // If not, set up a new instance.
      let destroy = function() {
        return 'Ring destroyed!';
      };

      // Return the new instance and assign it to a symbol
      return OneRing[toRuleThemAll] = {
        destroy
      };
    }

    // Rings should be defined
    expect(myRing).to.be.defined;
    expect(myPrecious).to.be.defined;

    // We should have a symbol to hold a reference to the singleton
    expect(typeof toRuleThemAll).to.equal('symbol');

    // Both variables should reference the same instance
    expect(myRing).to.equal(myPrecious);

    // Both should be properly created instances
    expect(myRing.destroy()).to.equal('Ring destroyed!');
    expect(myPrecious.destroy()).to.equal('Ring destroyed!');
  })
});
