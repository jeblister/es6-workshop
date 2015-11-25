import {expect} from 'chai';
import * as sinon from 'sinon';
import * as mediator from './Mediator';

describe.only('Mediator PUB-SUB', () => {
  var dog, cat;
  beforeEach(() => {
    // register the animals (subscribers to 'pets')
    dog = function(message) {
      if (message === 'ball') {
        console.log('The dog ran after the ' + message);
      }
    };
    mediator.subscribe('pets', dog);

    cat = function(message) {
      console.log('The cat looked and ignored the ' + message);
    };
    mediator.subscribe('pets', cat);
  });

  it('maintains a list of interested subscribes', ()=> {
    expect(mediator).to.have.property('subscribe');
    expect(mediator).to.have.property('publish');

  });
  it('publish an event', ()=> {
    let spy = sinon.spy(mediator.publish());
    spy('pets', 'ball');
    expect(spy.callCount).to.equal( 1 );
    expect(spy.calledWithExactly( 'pets', 'ball' )).to.be.true;
    // throw a ball (publish to 'pets')
    console.log('Throwing a ball...');
    mediator.publish('pets', 'ball');
    // The dog ran after the ball
    // The cat looked and ignored the ball

    // throw a human (publish to 'pets')
    console.log('Throwing a human...');
    mediator.publish('pets', 'human');
    // The cat looked and ignored the human
  });

});
