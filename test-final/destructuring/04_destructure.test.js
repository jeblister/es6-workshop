import {expect, assert} from 'chai';

describe('Destructuring', () => {
  var getAddress =  (address) => {
    let {city, state, zip, lat, long}= address;
    return {city, state, zip, lat, long};
  };

  describe('with Objects', () => {


    it('can be used to pull apart objects', () => {
      // Using destructuring, call `getAddress()` and create a 'city', 'state' and 'zip' variable.


      let address = getAddress (
        {
          city: 'Salt Lake City',
          state: 'UT',
          zip: 84115
        }
      );
      var city = address.city;
      var state = address.state;
      var zip = address.zip;

      expect(city).to.equal('Salt Lake City');
      expect(state).to.equal('UT');
      expect(zip).to.equal(84115);
    });

    it('+++can be used to pull apart objects', () => {
      let getAddress =  (address) => {
        let {city,state,zip}= address;
        return {city,state,zip};
      };
      // Using destructuring, call `getAddress()`
    let address=  getAddress({city: 'Rabat', state:'', zip:'' });
    expect(address).to.include({
            city: 'Rabat'
          });
    let result =   {city: 'Rabat',state:'',zip:'' };
    // chai API
    // Asserts that the target is deeply equal to value.
    // expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
  //   expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);

    expect(address).to.eql(result);
    });

    it('sets missing values to undefined', () => {

      // Using destructuring, call `getAddress()` and create an 'address' variable.
      let address = getAddress({}).address;
      expect(address).to.be.undefined;
    });

    it('can alias destructured variables', () => {

      // Using destructuring, call `getAddress()` and pull the city, state and zip out, and alias them to c, s, z, respectively
      let {city:c, state:s, zip:z}= getAddress(  {
          city: 'Salt Lake City',
          state: 'UT',
          zip: 84115
        });

      expect(c).to.equal('Salt Lake City');
      expect(s).to.equal('UT');
      expect(z).to.equal(84115);
      expect(()=>console.log(city)).to.throw();
      expect(()=>console.log(state)).to.throw();
      expect(()=>console.log(zip)).to.throw();

    });

    it('can destructure nested variables', () => {

      // Using destructuring, call `getAddress()` and create an pull out the nested 'lat' and 'long' variables
      let {...args, lat, long}= getAddress({ ...args, lat:40.776608, long: -111.920485 });
      expect(lat).to.equal(40.776608);
      expect(long).to.equal(-111.920485);
      expect(()=> console.log(coords)).to.throw();

    });

  });

  // destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring objects', () => {

  it('is simple', () => {
    const {x} = {x: 1};
    assert.equal(x, 1);
  });

  describe('nested', () => {
    it('multiple objects', () => {
      const magic = {first: 23, second: 42};
      const {first,second} = magic;
      assert.equal(second, 42);
    });
    it('object and array', () => {
      const {z:[y,x]} = {z: [23, 42]};
      assert.equal(x, 42);
    });
    it('array and object', () => {
      const [,[{...args,lang}]] = [null, [{env: 'browser', lang: 'ES6'}]];
      assert.equal(lang, 'ES6');
    });
  });

  describe('interesting', () => {
    it('missing refs become undefined', () => {
      const {z} = {x: 1, y: 2};
      assert.equal(z, void 0);
    });

    it('destructure from builtins (string)', () => {
      const {substr} = "yes" ;
      assert.equal(substr, String.prototype.substr);
    });
  });

});

// destructuring - array
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring arrays makes shorter code', () => {

  it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', () => {
    let [firstValue] = [1];
    assert.strictEqual(firstValue, 1);
  });

  it('swap two variables, in one operation', () => {
    let [x, y] = ['ax', 'why'];
    [x, y] = [y, x];
    assert.deepEqual([x, y], ['why', 'ax']);
  });

  it('leading commas', () => {
    const all = ['ax', 'why', 'zet'];
    const [ x,y,z] = all;
    assert.equal(z, 'zet');
  });

  it('extract from nested arrays', () => {
    const user = [['Some', 'One'], 23];
    const [[firstName, surname], age] = user;

    const expected = 'Some One = 23 years';
    assert.equal(`${firstName} ${surname} = ${age} years`, expected);
  });

  it('chained assignments', () => {
    let c, d;
    let [a, b] = [c, d] = [1, 2];
    assert.deepEqual([a, b, c, d], [1, 2, 1, 2]);
  });

  it('in for-of loop', () => {
    for (var [a,b] of [[0,1], [1, 2]]) { console.log([a,b]);}
    assert.deepEqual([a, b], [1, 2]);
  });

});

// destructuring - defaults
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring can also have default values', () => {

it('for an empty array', () => {
  const [a=1] = [];
  assert.equal(a, 1);
});

it('for a missing value', () => {
  const [,b=2] = [1,2,3];
  assert.equal(b, 2);
});

it('in an object', () => {
  const {a, b=2} = {a: 1};
  assert.equal(b, 2);
});

it('if the value is undefined', () => {
  const {a, b=2} = {a: 1, b: void 0};
  assert.strictEqual(b, 2);
});

it('also a string works with defaults', () => {
  const [a='1',b=2] = '1';
  assert.equal(a, '1');
  assert.equal(b, 2);
});

});

  describe('with Arrays', ()=> {

    it('can be used to pull apart arrays', () => {

      // Call getNumbers and pull the first value out as `one` and the second as `two`
      let [one,two] = getNumbers () ;
      function getNumbers () {return [1,2] };

      expect(one).to.equal(1);
      expect(two).to.equal(2);

    });

    it('can skip indexes in arrays', () => {

      // Call getNumbers and pull the first value out as `one` and the third as `three`. Don't pull out the second index. Skip it
      let [one,three] = getNumbers () ;
      function getNumbers () {return [1, 3] };
      expect(one).to.equal(1);
      expect(three).to.equal(3);
      expect(()=>console.log(two)).to.throw();
    });

    it('can reach nested arrays', () => {

      function getNestedNumbers() {
        return [1, 2, [3, 4, [5, 6]]];
      }

      // Call getNestedNumbers and pull 1 out as `one`, the 3 as `three` and 6 as `sixth`.
      let [one, two, [three, four, [five, six]]]= getNestedNumbers() ;

      expect(one).to.equal(1);
      expect(three).to.equal(3);
      expect(six).to.equal(6);

    });

  });

});

// destructuring - parameters
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring function parameters', () => {

  describe('destruct parameters', () => {
    it('multiple params from object', () => {
      const fn = ({id, name}) => {
        assert.equal(id, 42);
        assert.equal(name, 'Wolfram');
      };
      const user = {name: 'Wolfram', id: 42};
      fn(user);


    });

    it('multiple params from array/object', () => {
      const fn = ([{name}]) => {
        assert.equal(name, 'Alice');
      };
      const users = [{name: 'Alice', id: 42}];
      fn(users);
    });
  });

  describe('default values', () => {
    it('for simple values', () => {
      const fn = ({id, name='Bobby'}) => {
        assert.strictEqual(id, 23);
        assert.strictEqual(name, 'Bob');
      };
      fn({id:23, name:'Bob'});
    });

    it('for a missing array value', () => {
      const defaultUser = {id: 23, name: 'Joe'};
      const fn = ([user]=[defaultUser]) => {
        assert.deepEqual(user, defaultUser);
      };

      fn();
    });

    it('mix of parameter types', () => {
      const fn = (id, [arr], {obj}) => {
        assert.equal(id, 1);
        assert.equal(arr, 2);
        assert.equal(obj, 3);
      };
      fn(1, [2], {obj:3});
    });
  });

});

// destructuring - assign
// To do: make all tests pass, leave the assert lines unchanged!

describe('assign object property values to new variables while destructuring', () => {

  describe('for simple objects', function() {
    it('use a colon after the property name, like so `propertyName: newName`', () => {
      const {x: y} = {x: 1};
      assert.equal(y, 1);
    });

    it('assign a new name and give it a default value using `= <default value>`', () => {
      const {x: y=42} = {y: 23};
      assert.equal(y, 42);
    });
  });

  describe('for function parameter names', function() {
    it('do it the same way, with a colon behind it', () => {
      const fn = ({y}) => {
        assert.equal(y, 1);
      };
      fn({y: 1});
    });

    it('giving it a default value is possible too, like above', () => {
      const fn = ({y=3}) => {
        assert.equal(y, 3);
      };
      fn({});
    });
  });

});

// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring also works on strings', () => {


  it('destructure every character', () => {
    let [a, b, c] = 'abc';
    assert.deepEqual([a, b, c], ['a', 'b', 'c']);
  });

  it('missing characters are undefined', () => {
    const [a,b,c] = 'ab';
    assert.equal(c, void 0);
  });

  it('unicode character work too', () => {
    const [a,space, coffee, cafe] = 'a ☕ ☕☕';
    assert.equal(coffee, '\u{2615}');
  });

});
// MORE AT http://www.2ality.com/2015/01/es6-destructuring.html
