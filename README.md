# ES6-Workshop

## Welcome

Welcome to this ES6 workshop. Our goal is to help everyone make strides towards learning the newest ES6 syntax, and
how to use the latest constructs in JavaScript.

This repo is meant to be used in parallel with a lecture style presentation of
[the new features](https://github.com/lukehoban/es6features).

and

[katas](https://github.com/tddbin/katas/tree/master/katas/es6).

## Your Goal

This repo is full of failing tests. The only way to get them to pass it by using your newly acquired knowledge of ES6
and all of the new features that are part of this latest release. For each test, you will need to write/rewrite to code
using the latest ES6 syntax. Once all of your tests pass, you will want to move onto the next section.

By the time that the workshop is over, all of your tests will be running and passing.

## How To Get Started

### Clone the repo

You will need to start by cloning this repo. From your terminal, type:

```
git clone https://github.com/jeblister/es6-workshop.git && cd es6-workshop
```

### Install Dependencies

Once you have cloned the repo, in need to install the local dependencies. From your terminal, type:

```
npm install
```

# How To Run Tests
Once you have everything installed, you are ready to run some tests. There are two directories with tests in them: `test` and `test-final`.
The `test-final` directory is like a cheat sheet. All of the tests contain the required ES6 code to make the tests pass. You will need to
edit the tests in the `test` directory, and make the tests pass.

To run the tests, in your terminal run:

```
npm test
```

If you want the tests to continue running as you make changes, run:

```
npm run test:watch
```

This will execute the tests in the `test` directory. Currently all of these tests are disabled, using `it.skip`. Your
job is to one-by-one turn each test back on and get the test to pass, by writing the required ES6 code. Once you have
written the required code, the tests will pass, and you can move onto the next test.

# Thanks

If you have any questions, [let me know](https://github.com/jeblister).

If you use this workshop, please Pull Request this readme with a link to your event.

### Events

.....
