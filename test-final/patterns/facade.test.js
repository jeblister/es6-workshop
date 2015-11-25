import {expect} from 'chai';
import factorial from './factorial.api';

describe('Façade patern', () => {

  it('Provides a convenient higher-level interface to a component', ()=> {

  expect(factorial(18)).to.equal("18! = 6402373705728000 (17 operations)");
  expect(factorial(20)).to.equal("20! = 2432902008176640000 (2 operations)");

  });
});
