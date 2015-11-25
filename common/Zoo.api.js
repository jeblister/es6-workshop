// zoo.js
var getBarkStyle = function(isHowler) {
  return isHowler? 'woooooow!': 'woof, woof!';
};
export function Dog(name, breed) {
  this.name = name;
  this.bark = getBarkStyle(breed === 'husky');
};
export function Wolf(name) {
  this.name = name;
  this.bark = getBarkStyle(true);
};
