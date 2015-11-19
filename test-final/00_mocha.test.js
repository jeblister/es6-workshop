import {expect, assert} from 'chai';
// setup  initial test about mocha
describe('test moucha  + assert', () => {

  it('simple values equal?', () => assert.equal('one', 'one'));
  it('simple values doesnt equal?', () => assert.notEqual('one', 'two'));

  it('value is truthy', () => assert.ok(true));

  it('complex types equal?', () => assert.deepEqual([1,2,3], [1,2,3]));
  it('complex types dont equal?', () => assert.notDeepEqual([1,2,3], ['one', 'two']));

  it('value and type equal?', () => assert.strictEqual('1', '1'));
  it('complex types dont equal?', () => assert.notStrictEqual(1, '1'));

  it('throws?', () => assert.throws(() => { throw new Error(); }));
  it('does not throw?', () => assert.doesNotThrow(() => {}));

});

describe('test mocha + expect', () => {

let foo = 'bar', beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.length(3);
expect(beverages).to.have.property('tea').with.length(3);

  it('simple values equal?', () => {expect('one').to.equal('one')});
  it('simple values doesnt equal?', () => expect('one').to.not.equal('two'))

  it('value is truthy', () => expect(true).to.be.ok)

  it('complex types equal?', () => expect([1,2,3]).to.deep.equal([1,2,3]))
  it('complex types dont equal?', () => expect([1,2,3]).to.not.deep.equal(['one', 'two']))

  it('value and type equal?', () => expect('1').to.eql('1'))
  it('complex types dont equal?', () => expect(1).to.not.eql('1'))

  it('throws?', () => expect(() => { throw new Error() }).to.throw(Error))
  it('does not throw?', () => expect(() => {}).to.not.throw(Error))

});
