// WRITE YOUR IMPORT STATEMENTS HERE
import {assert} from 'chai';

import {expect} from 'chai';

import Mathy, {default as myMathy} from '../../common/Mathy';

import {sqrt as mySqrt, square as mySquare } from '../../common/Mathy';

import _ from 'lodash';

import { Dog, Wolf } from '../../common/Zoo.api';

describe('ES6 Modules: use `import` to import functions that have been exported (somewhere else)', () => {
  it('import an entire module using `import <name> from "<moduleName> or path"`', () => {

    // I DID THIS ONE FOR YOU!
    expect(Mathy.sqrt).to.exist;
    expect(Mathy.square).to.exist;
    expect(Mathy.diag).to.exist;
  });


  it('Can alias the import name : using `{member as alias}` as memberName', () => {
    // Import `myMathy` to ge these tests to pass.
    // NOTE: All import statements have to be done at the top of the file

    expect(myMathy).to.exist;
    expect(myMathy.sqrt).to.equal(Mathy.sqrt);
    expect(myMathy.square).to.equal(Mathy.square);
    expect(myMathy.diag).to.equal(Mathy.diag);
  });

  it('can destructure the import, to only retain pieces of the import using `import {<memberName>} from "module"` you will separate multiple members with a comma', () => {

    // Import `Mathy` again, but pull out only the `sqrt` as mySqrt, and `square` as mySquare
    // NOTE: All import statements have to be done at the top of the file

    expect(mySqrt).to.exist;
    expect(mySquare).to.exist;
    expect(mySqrt).to.equal(Mathy.sqrt);
    expect(mySquare).to.equal(Mathy.square);
  });

  it('can import from my node_modules', () => {

    // import `lodash`
    // NOTE: All import statements have to be done at the top of the file

    expect(_).to.exist;

  });

  it('can import a costum module from folder ', () => {

    let myDog = new Dog('Sherlock', 'beagle');
    console.log(myDog.name + ': ' + myDog.bark); // Sherlock: woof, woof!
    expect(myDog.name + ': ' + myDog.bark).to.equal("Sherlock: woof, woof!");

    let myWolf = new Wolf('Werewolf');
    console.log(myWolf.name + ': ' + myWolf.bark); // Werewolf: woooooow!'

    expect(myWolf.name + ': ' + myWolf.bark).to.equal("Werewolf: woooooow!");

  });

});
