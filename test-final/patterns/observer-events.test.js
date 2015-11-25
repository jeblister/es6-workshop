import {expect} from 'chai';
import * as sinon from 'sinon';
import Subject from './Subject';

describe('Observer and events', () => {
  // A Subject object maintains a list of interested Observer objects, automatically notifying them of its changes.
  let ball, human, dog,cat;
  beforeEach(()=> {
    // runs before each test in this block
    ball = new Subject();
    human = new Subject();

    // register the animals (observers)
    dog = function(message) {
      if (message === 'BALL') {
        console.log('The dog ran after the ' + message);
      }
    };
    ball.addObserver(dog); human.addObserver(dog);

    cat = function(message) {
      console.log('The cat looked and ignored the ' + message);
    };
    ball.addObserver(cat); human.addObserver(cat);
  });

  it('maintains a list of interested Observer objects', ()=> {
    expect(ball).to.be.an.instanceOf(Subject);
    expect(human).to.be.an.instanceOf(Subject);
    expect(ball.observers).to.eql([dog,cat]);
    expect(human.observers).to.eql([dog,cat]);
  });
  it('throw a ball (subject)', ()=> {
    // throw a ball (subject)
    let spy = sinon.spy(ball.notify());
    console.log('Throwing a ball...');

    ball.notify('BALL')
    // The dog ran after the BALL
    // The cat looked and ignored the BALL

    spy('BALL');
    expect(spy).called;
    expect(spy.callCount).to.equal( 1 );
  });
  it('throw a human (subject)', ()=> {
      let spy = sinon.spy(human.notify());
    // throw a human (subject)
    console.log('Throwing a human...');

    human.notify('HUMAN')
    // The cat looked and ignored the HUMAN
    spy('HUMAN');
    expect(spy.callCount).to.equal( 1 );
    expect(spy.calledWithExactly( 'HUMAN' )).to.be.true;
  });
});
