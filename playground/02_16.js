//console.log('test');


// Prototypal inheritance practice:

// OBJECT CONSTRUCTOR  (can use Class in ES6, but its sugar g-damnit)
function Animal(name) {
  this.name = name;
};

Animal.prototype = {
    constructor: Animal,
    numLegs: 2,
    summary: function() {
      console.log(`This is a ${this.name}`)
    }
}

// Will return a constructor function in console.
//console.log(Animal);  


// New Instance of Animal -- using 'NEW'
const lizard = new Animal('Lizard',false);
// console.log(lizard.summary());
// console.log(lizard instanceof Animal)

let ownProps = [];
let prototypeProps = [];

// Demonstrating property inheritance
for(let property in lizard){
  if(Animal.hasOwnProperty(property)){
      ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
};
    // console.log(ownProps);
    // console.log(prototypeProps);


// New Instance of Animal -- using 'Object.create(obj)'
function Bird(){};
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

let duck = Object.create(Bird.prototype);
//bird.prototype.constructor = bird;
duck.name = "Duck";

console.log(duck);

//console.log(Animal);