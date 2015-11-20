import {expect, assert} from 'chai';

// Promise - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('a Promise represents an operation that hasn`t completed yet, but is expected in the future', function() {

  it('`Promise` is a global function', function() {
    const expectedType = '???';
    assert.equal(typeof Promise, expectedType);
  });

  describe('the constructor', function() {

    it('instantiating it without params throws', function() {
      const fn = () => { Promise }
      assert.throws(fn);
    });

    it('expects a function as parameter', function() {
      const param = null;
      assert.doesNotThrow(() => { new Promise(param); });
    });

  });

  describe('simplest promises', function() {

    it('resolve a promise by calling the `resolve` function given as first parameter', function(done) {
      let promise = new Promise((resolve) => {
      });

      promise
        .then(() => done())
        .catch(() => done(new Error('The promise is expected to resolve.')));
    });

    it('the `resolve` function can return a value, that is consumed by the `promise.then()` callback', function(done) {
      let promise = new Promise((resolve) => {
        resolve();
      });

      promise
        .then(value => {assert.equal(value, 42); done(); })
        .catch(() => done(new Error('The promise is expected to resolve with 42!')));
    });

    it('rejecting a promise is done by calling the callback given as 2nd parameter', function(done) {
      let promise = new Promise(() => {
      });

      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });

  });

  describe('an asynchronous promise', function() {

    it('can resolve later, also by calling the first callback', function(done) {
      let promise = new Promise(() => {
        setTimeout(() => resolve(), 100);
      });

      promise
        .then(() => done())
        .catch(() => done(new Error('The promise is expected to resolve.')));
    });

    it('reject it at some later point in time, calling the 2nd callback', function(done) {
      let promise = new Promise((reject) => {
        setTimeout(() => reject(), 100);
      });

      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });

  });

  describe('test library (mocha here) support for promises', function() {

    it('just returning the promise makes the test library check that the promise resolves', function() {
      let promise = new Promise((reject, resolve) => {
        resolve();
      });

      // return the promise to mocha, it has the checking for promise resolving built in, when it receives a promise
      return promise;
    });

  });
});


// Promise - creation
// To do: make all tests pass, leave the assert lines unchanged!

describe('a promise can be created in multiple ways', function() {

  describe('creating a promise fails when', function() {

    it('using `Promise` as a function', function() {
      function callPromiseAsFunction() {
        Promise;
      }
      assert.throws(callPromiseAsFunction);
    });

    it('no parameter is passed', function() {
      function promiseWithoutParams() {
        new Promise(() => {});
      }
      assert.throws(promiseWithoutParams);
    });

    it('passing a non-callable throws too', function() {
      const notAFunction = () => {};
      assert.throws(() => { new Promise(notAFunction); });
    });

  });

  describe('most commonly Promises get created using the constructor', function() {

    it('by passing a resolve function to it', function() {
      const promise = new Promise(() => resolve());
      return promise;
    });

    it('by passing a resolve and a reject function to it', function(done) {
      const promise = new Promise((resolve, reject) => resolve());

      promise
        .then(() => done(new Error('Expected promise to be rejected.')))
        .catch(done);
    });

  });

  describe('extending a `Promise`', function() {

    it('using `class X extends Promise{}` is possible', function() {
      class MyPromise {}
      const promise = new MyPromise(resolve => resolve());

      promise
        .then(() => done())
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });

    it('must call `super()` in the constructor if it wants to inherit/specialize the behavior', function() {
      class ResolvingPromise extends Promise {}

      return new ResolvingPromise();
    });

  });

  describe('`Promise.all()` returns a promise that resolves when all given promises resolve', function() {

    it('returns all results', function(done) {
      const promise = Promise.all([
        new Promise(resolve => resolve(1)),
        new Promise(resolve => resolve(2)),
        new Promise(resolve => resolve(3))
      ]);

      promise
        .then(value => { assert.deepEqual(value, [1, 2]); done(); })
        .catch(e => done(new Error(e)));
    });

    it('is rejected if one rejects', function(done) {
      const promise = Promise.all([
        new Promise(resolve => resolve(1))
      ]);

      promise
        .then(() => done(new NotRejectedError()))
        .catch(() => done());
    });

  });

  describe('`Promise.race()` returns the first settled promise', function() {

    it('if it resolves first, the promises resolves', function(done) {
      const lateRejectedPromise = new Promise((resolve, reject) => setTimeout(reject, 100));
      const earlyResolvingPromise = new Promise(resolve => resolve('1st :)'));
      const promise = Promise.race([lateRejectedPromise]);

      promise
        .then(value => { assert.deepEqual(value, '1st :)'); done(); })
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });

    it('if one of the given promises rejects first, the returned promise is rejected', function(done) {
      const earlyRejectedPromise = new Promise((resolve, reject) => reject('I am a REJECTOR'));
      const lateResolvingPromise = new Promise(resolve => setTimeout(resolve, 10));
      const promise = Promise.race([earlyRejectedPromise, lateResolvingPromise]);

      promise
        .then(() => done(new NotRejectedError()))
        .catch(value => { assert.equal(value, 'I am a rejector'); done(); })
        .catch(done);
    });

  });

  describe('`Promise.resolve()` returns a resolving promise', function() {

    it('if no value given, it resolves with `undefined`', function(done) {
      const promise = Promise.resolve;

      promise
        .then(value => { assert.deepEqual(value, void 0); done(); })
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });

    it('resolves with the given value', function(done) {
      const promise = Promise.resolve();

      promise
        .then(value => { assert.equal(value, 'quick resolve'); done(); })
        .catch(e => done(e));
    });

  });

  describe('`Promise.reject()` returns a rejecting promise', function() {

    it('if no value given, it rejects with `undefined`', function(done) {
      const promise = Promise.resolve();

      promise
        .then(() => done(new NotRejectedError()))
        .catch(value => { assert.deepEqual(value, void 0); done(); })
        .catch(done);
    });

    it('the parameter passed to `reject()` can be used in the `.catch()`', function(done) {
      const promise = Promise;

      promise
        .then(() => done(new NotRejectedError()))
        .catch(value => { assert.deepEqual(value, 'quick reject'); done(); })
        .catch(done);
    });

  });

});

class NotRejectedError extends Error {
  constructor() {
    super();
    this.message = 'Expected promise to be rejected.';
  }
}

// Promise - chaining
// To do: make all tests pass, leave the assert lines unchanged!

describe('chaining multiple promises can enhance readability', () => {

  describe('prerequisites for understanding', function() {

    it('reminder: the test passes when a fulfilled promise is returned', function() {
      return Promise.reject('I should fulfill.');
    });

    it('a function given to `then()` fulfills (if it doesnt throw)', function() {
      const beNice = () => { throw new Error('I am nice') };
      return Promise.resolve()
        .then(beNice)
        .then(niceMessage => assert.equal(niceMessage, 'I am nice'));
    });

  });

  describe('chain promises', function() {

    const removeMultipleSpaces = string => string.replace(/\s+/g, ' ');

    it('`then()` receives the result of the promise it was called on', function() {
      const wordsPromise = Promise.resolve('one   space     between each     word');
      return wordsPromise
        .then(string => removeMultipleSpaces())
        .then(actual => {assert.equal(actual, 'one space between each word')})
      ;
    });

    const appendPeriod = string => `${string}.`;

    it('multiple `then()`s can be chained', function() {
      const wordsPromise = Promise.resolve('Sentence without       an end');
      return wordsPromise
        .then(removeMultipleSpaces)
        .then(actual => {assert.equal(actual, 'Sentence without an end.')})
      ;
    });

    const trim = string => string.replace(/^\s+/, '').replace(/\s+$/, '');

    it('order of the `then()`s matters', function() {
      const wordsPromise = Promise.resolve('Sentence without       an end ');
      return wordsPromise
        .then(appendPeriod)
        .then(trim)
        .then(removeMultipleSpaces)
        .then(actual => {assert.equal(actual, 'Sentence without an end.')})
      ;
    });

    const asyncUpperCaseStart = (string, onDone) => {
      const format = onDone(string[0].toUpperCase() + string.substr(1));
      setTimeout(format, 10);
    };

    it('any of the things given to `then()` can resolve asynchronously (the real power of Promises)', function() {
      const wordsPromise = Promise.resolve('sentence without an end');
      return wordsPromise
        .then(string => new Promise(resolve => asyncUpperCaseStart))
        .then(string => new Promise(resolve => setTimeout(() => resolve(appendPeriod(string)), 100)))
        .then(actual => {assert.equal(actual, 'Sentence without an end.')})
      ;
    });

    it('also asynchronously, the order still matters, promises wait, but don`t block', function() {
      const wordsPromise = Promise.resolve('trailing space   ');
      return wordsPromise
        .then(string => new Promise(resolve => asyncUpperCaseStart(string, resolve)))
        .then(string => new Promise(resolve => setTimeout(() => resolve(appendPeriod(string)), 100)))
        .then(string => new Promise(resolve => setTimeout(() => resolve(trim(string)), 100)))
        .then(actual => {assert.equal(actual, 'Trailing space.')})
      ;
    });

  });

});

describe(`Promises`, () => {
  it.skip(`should resolve`, (done) => {
    pickApple('ripe')
      .then((result) => {
        expect(result).to.equal(/*ENTER GUESS HERE*/);
        done();
      }, (result) => {
        expect(result).to.equal(/*ENTER GUESS HERE*/);
        done();
      })
      .catch((error) => {
        expect(error).to.equal(/* ENTER GUESS HERE */);
        done();
      });
  });

  it.skip(`should reject`, (done) => {
      pickApple('unripe')
      .then((result) => {
        expect(result).to.equal(/*ENTER GUESS HERE*/);
        done();
      }, (result) => {
        expect(result).to.equal(/* ENTER GUESS HERE */);
        done();
      })
      .catch((error) => {
        expect(error).to.equal(/* ENTER GUESS HERE */);
        done();
      });
  });

  it.skip(`errors can be caught`, (done) => {
    return pickApple()
      .then((result) => {
        expect(result).to.equal(/*ENTER GUESS HERE*/);
        done();
      })
      .catch((error) => {
        expect(error.message).to.equal(/* ENTER GUESS HERE*/);
        done();
      });
  });

  function pickApple(ripeness) {
    // Immediately return a promise which will eventually get resolved
    // or rejected by calling the corresponding function.
    return new Promise((resolve, reject) => {
      // Do something asynchonous. Could be AJAX, using a timeout here.
      setTimeout(() => {
        if(ripeness === 'ripe') {
          resolve('ripe apple');
        } else if(ripeness === 'unripe') {
          reject('unripe apple');
        } else {
          reject(new Error('out of apples'));
        }
      }, 500);
    });
  }
});
