// console.log("Hello, friend");

const dogFactory1 = function ({ name, breed, weight }) {
  //   let { name, breed, weight } = arguments;
  return arguments;
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
  };
};
const exampleDog = dogFactory1("spot", "bulldog", 47);
//onsole.log(exampleDog);

// class Dog {
//   constructor(name, breed, weight) {
//     (this.name = name), (this.breed = breed), (this.weight = weight);
//   }
//   getInfo() {
//     return `${this.name}, ${this.breed}, ${this.weight}`;
//   }
// }

// const spot = new Dog("Spot", "Bull Terrier", 47);

// // console.log(spot.getInfo());

// class Pokemon{
//     constructor(){

//     }
//     getInfo(){

//     }
// }

// WORKS:
// Write your code here:

const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    get breed() {
      return this._breed;
    },
    get weight() {
      return this._weight;
    },
    set name(newName) {
      return (this._name = newName);
    },
    set breed(newBreed) {
      return (this._breed = newBreed);
    },
    set weight(newWeight) {
      return (this._weight = newWeight);
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      this._weight++;
    },
  };
};

const spot = dogFactory("spot", "bulldog", 45);

//console.log(spot);

function pokemonFactory({ name, type, level } = {}) {
  //return { name, type, level };
  //return name, type, level;
  return {
    name: name,
    type: type,
    level: level,
    pokeDexInfo() {
      return `${name}, ${type}, ${level}`;
    },
  };

  // const pokeDexInfo = function () {
  //   return `${this.name} is a ${this.type} type, at level ${this.level}`;
  // };
}

const mewtwo = pokemonFactory({ name: "Mewtwo", type: "Psychic", level: 100 });

console.log(mewtwo.pokeDexInfo());
