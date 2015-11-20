import {expect, assert} from 'chai';

// 57: Default parameters - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('default parameters make function parameters more flexible', () => {

  it('define it using an assignment to the parameter `function(param=1){}`', function() {
    let number = (int) => int;

    assert.equal(number(), 0);
  });

  it('it is used when undefined is passed', function() {
    let number = (int = 23) => int;
    const param = 42;

    assert.equal(number(param), 23);
  });

  it('it is not used when a value is given', function() {
    function xhr() {
      return method;
    }

    assert.equal(xhr('POST'), 'POST');
  });

  it('it is evaluated at run time', function() {
    let defaultValue;
    function xhr(method = `value: ${defaultValue}`) {
      return method;
    }

    assert.equal(xhr(), 'value: 42');
    defaultValue = 23;
  });

  it('it can also be a function', function() {
    let defaultValue;
    function fn(value = defaultValue()) {
      return value;
    }

    assert.equal(fn(), defaultValue());
  });

});

describe('Default Values', () => {
  it.skip('can be triggered when the incoming argument is undefined', () => {

    function test(name = 'Mercury') {
      return name;
    }

    expect(test('Aaron')).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(test(undefined)).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(test(null)).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(test()).to.equal(/*ENTER YOUR GUESS HERE*/);

  });

  it.skip(`aren't included in arguments`, () => {

    function test(name = 'Mercury') {
      return arguments.length;
    }

    expect(test('Aaron')).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(test(null)).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(test()).to.equal(/*ENTER YOUR GUESS HERE*/);

  });

  it.skip('can trigger a function call', () => {
    let triggerCount = 0;

    function test(name = getDefault()) {
      return name;
    }

    function getDefault() {
      triggerCount++;
      return 'Mercury';
    }

    expect(triggerCount).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(test('Aaron')).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(test()).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(test(null)).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(triggerCount).to.equal(/*ENTER YOUR GUESS HERE*/);

  });

});

describe('Rest Parameters', () => {

  it.skip('catch non-specified params', () => {

    function resty(first, second, ...others) {
      return others;
    }

    expect(resty().length).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1).length).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1, 2).length).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1, 2, 3).length).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length).to.equal(/*ENTER YOUR GUESS HERE*/);

  });

  it.skip('has a different length than `arguments`', () => {

    function resty(first, second, ...others) {
      return others.length == arguments.length;
    }

    expect(resty()).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1)).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1, 2)).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1, 2, 3)).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10)).to.equal(/*ENTER YOUR GUESS HERE*/);
  });

  it.skip('is an actual array, unlike arguments', () => {

    function resty(...args) {
      return args;
    }

    function argy() {
      return arguments;
    }

    var args = argy(1, 2, 3);
    var rests = resty(1, 2, 3);

    expect(args.__proto__ == rests.__proto__).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(args.splice).to.equal(/*ENTER YOUR GUESS HERE*/);

    expect(rests.__proto__).to.equal(/*ENTER YOUR GUESS HERE*/);
    expect(rests.splice).to.exist;
    expect(rests.splice).to.equal(Array.prototype.splice);

  });


  describe('EXTRA CREDIT', ()=> {
    it.skip('it can default all arguments, optionally', () => {

      // Modify the method signature of `myFunction` to allow for all args to be optional

      function myFunction({name, age, favoriteBand}) {
        expect(name).to.exist;
        expect(age).to.exist;
        expect(favoriteBand).to.exist;
      }

      myFunction({name: 'Axel', age: 37, favoriteBand: 'Taylor Swift'});
      myFunction({name: 'Axel', age: 37});
      myFunction({name: 'Axel'});
      myFunction({});
      myFunction();

    });
  })

});
