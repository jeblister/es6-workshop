import {expect, assert} from 'chai';

//  Revisiting functions
// To do: make all tests pass, leave the asserts unchanged!
describe('function definition', function() {

  //In JavaScript, you can define a function through either a function declaration or a function expression
  // function f() {} // declaration
  // var g = function () {}; // expression and assignment

  it.skip('What is this?', function() {
    var func = function f(b) {
      return this + b;
    };
    // func(1); // undefined.a : error cannot read property of undefined
    assert.throws(() => { func(1) });
    //  func.apply({a: 1}, [2]); // this.a + b = 1 + 2 = 3
    assert.equal( func.apply({a: 1}, [2]), 3);
    // func.call({a: 1}, 2); // this.a + b = 1 + 2 = 3
    assert.equal( func.call({a: 1}, 2), 3);
  });

  it.skip('Object method', function() {
    var obj = {
      a: 104,
      f: function(b) { return this.a + b; }
    };

    assert.equal( obj.f(1), 11);
    assert.equal( obj.f.apply({a: 1}, [2]), 3);
    assert.equal( obj.f.call({a: 1}, 2), 3);
  });

  it.skip('Using .bind(…)', function() {

    let f = function f(b) {
      return this.a + b;
    };

    let g = f({a: 100});
    assert.equal( g(1), 101);
    // This `this` cannot be changed through .apply() and .call().
    assert.equal(g.apply({a: 1},[1]), 101)
    assert.equal(g.call({a: 1},1), 101)
  });

});
// arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!

describe('arrow functions', function() {

  it.skip('are shorter to write', function() {
    var func = () => {
      return 'I am func';
    };
    assert.equal(func(), 'I am func');
  });

  it.skip('a single expression, without curly braces returns too', function() {
    var func = () => {'I return too'};
    assert.equal(func(), 'I return too');
  });

  it.skip('one parameter can be written without parens', () => {
    var func = p => param - 1;
    assert.equal(func(23), 24);
  });

  it.skip('many params require parens', () => {
    var func = param => param + param1;
    assert.equal(func(23, 42), 23+42);
  });

  it.skip('body needs parens to return an object', () => {
    var func = () => {iAm: 'an object'};
    assert.deepEqual(func(), {iAm: 'an object'});
  });

});


//  arrow functions - binding
// To do: make all tests pass, leave the asserts unchanged!

describe('arrow functions have lexical `this`, no dynamic `this`', () => {

  it('What is this?', function() {
    this.who = 'Ali';

    var obj = {
      who: 'Mohamed',
      h : () => this.who
   };

    assert.notEqual(obj.h(), 'Mohamed');
  });
  it('Never use arrow functions as methods', function() {
    this.who = 'Ali';

    var obj = {
      who: 'Mohamed',
      // BAD
      h : () => this.who,
      // Good
      f() {return this.who}
   };

    assert.equal(obj.h(), 'Ali');
    assert.equal(obj.f(), 'Mohamed');
  });
});

describe('Arrow Functions', () => {

  it.skip('can replace traditional functions', () => {

    let fnMultiply, arrowMultiply;

    // Write two functions that take two params and return their product
    // For 'fnMultiply', set it equal to a regular function
    // For 'arrowMultiply', set it equal to an arrow function


    expect(fnMultiply(5, 5)).to.equal(arrowMultiply(5, 5));

  });

  it.skip('can replace traditional functions #2', () => {

    let nums = [2, 5, 10];

    // Replace the 'function' in this 'map' call with an arrow function.
    // Hint: you shouldn't have any braces or 'return' after you are done
    let squares = nums.map(function(num) {
      return num * num;
    });

    expect(squares.shift()).to.equal(4);
    expect(squares.shift()).to.equal(25);
    expect(squares.shift()).to.equal(100);

  });

  it.skip('binds `this` to the eval scope, not the runtime scope', () => {

    // Change the person object. One of the functions should become an arrow to allow for 'this' to retain context correctly

    let person = {
      name: 'Aaron',
      greetFriends: function(friends) {
        friends.forEach(function(friend) {
          console.log(this.name + ' greets to ' + friend);
        });
      }
    };

    let friendsArray = ['Naomi', 'Jojo', 'Ryan', 'Owen'];

    expect(()=> person.greetFriends(friendsArray)).not.to.throw();

  });

  it.skip('can make array filter chains more managable', () => {

    let data = [
      {type: 'Widget', name: 'Sprocket', price: 10.00, qty: 3},
      {type: 'Widget', name: 'Bracket', price: 1.00, qty: 5},
      {type: 'Widget', name: 'Brace', price: 2.50, qty: 1},
      {type: 'Widget', name: 'Sprocket', price: 4.00, qty: 2},
      {type: 'Food', name: 'Gouda', price: 8.75, qty: 4},
      {type: 'Food', name: 'Bacon', price: 3.50, qty: 3},
      {type: 'CD', name: 'Queen Best Hits', price: 5.50, qty: 5},
      {type: 'CD', name: 'Brittney Best Hits', price: 6.25, qty: 3},
      {type: 'CD', name: 'JT Best Hits', price: 2.25, qty: 6}
    ];

    // REPLACE ALL REGULAR FUNCTION WITH ARROW FUNCTIONS

    let shoppingList = data
    .filter(function(d) {
      return d.type != 'Widget';
    }) // Remove Widgets
    .filter(function(d) {
      return d.price < 5;
    }) // Find only remaining items with price < 5
    .sort(function(d) {
      return d.qty * -1;
    }) // Sort by price, desc
    .map(function(d) {
      return d.name;
    });// Pull just the name from each item

    expect(shoppingList.shift()).to.equal('Bacon');
    expect(shoppingList.shift()).to.equal('JT Best Hits');

  });

});
