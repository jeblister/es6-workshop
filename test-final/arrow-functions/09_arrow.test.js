import {expect, assert} from 'chai';

//  Revisiting functions
// To do: make all tests pass, leave the asserts unchanged!
describe('function definition', function() {

  //In JavaScript, you can define a function through either a function declaration or a function expression
  // function f() {} // declaration
  // var g = function () {}; // expression and assignment

  it('What is this?', function() {
    var func = function f(b) {
      return this.a + b;
    };
    // func(1); // undefined.a : error cannot read property of undefined
    assert.throws(() => { func(1) });
    //  func.apply({a: 1}, [2]); // this.a + b = 1 + 2 = 3
    assert.equal( func.apply({a: 1}, [2]), 3);
    // func.call({a: 1}, 2); // this.a + b = 1 + 2 = 3
    assert.equal( func.call({a: 1}, 2), 3);
  });

  it('Object method', function() {
    var obj = {
      a: 10,
      f: function(b) { return this.a + b; }
    };

    assert.equal( obj.f(1), 11);
    assert.equal( obj.f.apply({a: 1}, [2]), 3);
    assert.equal( obj.f.call({a: 1}, 2), 3);
  });

  it('Using .bind(…)', function() {

    let f = function f(b) {
      return this.a + b;
    };

    let g = f.bind({a: 100});
    assert.equal( g(1), 101);
    // This `this` cannot be changed through .apply() and .call().
    assert.equal(g.apply({a: 1},[1]), 101)
    assert.equal(g.call({a: 1},1), 101)
  });

});
// arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!

describe('arrow functions', function() {

  it('are shorter to write', function() {
    var func = () => {
      return 'I am func';
    };
    assert.equal(func(), 'I am func');
  });

  it('a single expression, without curly braces returns too', function() {
    var func = () => 'I return too';
    assert.equal(func(), 'I return too');
  });

  it('one parameter can be written without parens', () => {
    var func = p => p + 1;
    assert.equal(func(23), 24);
  });

  it('many params require parens', () => {
    var func = (param1,param2) => param1 + param2;
    assert.equal(func(23, 42), 23+42);
  });

  it('body needs parens to return an object', () => {
    var func = () =>( {iAm: 'an object'} );
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

  it('can replace traditional functions', () => {

    let fnMultiply, arrowMultiply;

    // Write two functions that take two params and return their product
    // For 'fnMultiply', set it equal to a regular function
    // For 'arrowMultiply', set it equal to an arrow function
    fnMultiply = function (a,b) { return a*b };
    arrowMultiply = (a,b) => { return a*b };
    expect(fnMultiply(5, 5)).to.equal(arrowMultiply(5, 5));

  });

  it('can replace traditional functions #2', () => {

    let nums = [2, 5, 10];

    // Replace the 'function' in this 'map' call with an arrow function.
    // Hint: you shouldn't have any braces or 'return' after you are done
    let squares = nums.map((num) => num * num);

    expect(squares.shift()).to.equal(4);
    expect(squares.shift()).to.equal(25);
    expect(squares.shift()).to.equal(100);

  });

  it('binds `this` to the eval scope, not the runtime scope', () => {

    // Change the person object. One of the functions should become an arrow to allow for 'this' to retain context correctly

    let person = {
      name: 'Aaron',
      greetFriends: function (friends) {
        friends.forEach(friend => {
          console.log(this.name + ' greets to ' + friend);
        });
      }
    };

    let friendsArray = ['Naomi', 'Jojo', 'Ryan', 'Owen'];

    expect(()=> person.greetFriends(friendsArray)).not.to.throw();

  });

  it('can make array filter chains more managable', () => {

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
    .filter(d => (d.type != 'Widget')) // Remove Widgets
    .filter(d => (d.price < 5)) // Find only remaining items with price < 5
    .sort(d => (d.qty * -1)) // Sort by price, desc
    .map(d => d.name);// Pull just the name from each item

    expect(shoppingList.shift()).to.equal('Bacon');
    expect(shoppingList.shift()).to.equal('JT Best Hits');

  });

});
