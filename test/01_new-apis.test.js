import {expect} from 'chai';

describe(`String`, () => {
  it(`should be easier to determine whether a string includes another`, () => {
    const sentence = 'It was the best of times. It was the worst of times';
    // create a variable called `result` that is assigned to a call of sentence.includes
    let result = sentence.includes('times');
    expect(result).to.be.true;
  });

  it(`should be easier to repeat a string`, () => {
    const repeated = 'abc123';
    // create a variable called `result` that is the result of repeating the string 4 times
    let result = repeated.repeat(4);
    expect(result).to.equal('abc123abc123abc123abc123');
  });
});

describe(`Array`, () => {
  it(`should be able to take an array-like object and convert it into an array`, () => {
    var obj = {length: 4, 0: 'a', 1: 'b', 2: 'c', time:"E", 3: 'd'};
    // this is even more handy with a NodeList like that returned from document.querySelector
    // create a variable called `result` and assign it to a call to Array.from
    let result = Array.from(obj);
    expect(result).to.deep.equal(['a', 'b', 'c', 'd']);
  });

  it(`should be easier to fill an array with values`, () => {
    const originalArray = new Array(5);
    // create a variable called `result` and assign it to an array that's filled with 3s except for the first item.
    let result = originalArray.fill(3, 1);
    expect(result).to.deep.equal([ , 3, 3, 3, 3]);
  });
});

describe(`Object`, () => {
  it(`should be easy to copy properties from one object to another`, () => {
    const source1 = {
      a: {
        b: 'c',
        m: [1, 2, 3]
      }
    };
    const source2 = {
      d: false,
      z: 34
    };
    const source3 = {
      z: 42,
      p: ['a', 'b', 'c']
    };

    const target = {
      a: {
        q: 'r',
        m: [4, 5, 6],
        s: {
          t: 3
        }
      },
      d: true,
      p: ['x', 'y', 'z']
    };

    // merge the sources into the target using Object.assign and assign the result to `result`

    // see redux.js.org it the function they use for make a new state sith this function (state, action)=>state
    let result = Object.assign(target, source1, source2, source3)
    expect(result).to.deep.equal({
      a: {
        b: 'c',
        m: [1, 2, 3]
      },
      d: false,
      z: 42,
      p: ['a', 'b', 'c']
    });

    // this is only here to indicate that the assignment is not deep
    expect(result).to.not.deep.equal({
      a: {
        b: 'c',
        m: [1, 2, 3],
        q: 'r',
        s: {
          t: 3
        }
      },
      d: false,
      z: 42,
      p: ['a', 'b', 'c']
    })
  });
});
