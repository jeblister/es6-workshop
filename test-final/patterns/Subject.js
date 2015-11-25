// subject.js
export default class Subject {
  constructor() {
    this.observers = [];
  }
  notify (message) {
    this.observers.forEach(function(observer) {
      observer.call(observer, message);
    });
  }
  addObserver (observer) {
    this.observers.push(observer);
  }

}
