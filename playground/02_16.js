//console.log('test');


// Prototypal inheritance practice:

// 1st obj
function Animal(name, hasWings){
  this.name = name;
  this.hasWings = hasWings;
};
Animal.prototype.summary = ()=> {
  console.log(`This is a ${this.name}`)
}

function Bird(){};
function Bear(){};


Bird.prototype = Object.create(Animal.prototype);

Bird.name = "Bird";

console.log(Animal.summary());