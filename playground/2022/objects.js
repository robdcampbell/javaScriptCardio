// BIND, APPLY, CALL

// OBJECT.assign(), OBJECT.defineProperty(), OBJECT.entries(), OBJECT.fromEntries(), OBJECT.freeze()

function User({ name, email }) {
  this.name = name;
  this.email = email;
}

User.prototype.userInfo = function () {
  return `${this.name} is from Pallet Town!`;
};

const user1 = new User({ name: "Ash", email: "ash@pokemon.com" });

//console.log(user1.userInfo())

////////////////////////////////////////////////////////////
// BIND

// Will not work with an arrow function because of the this binding.

// coordinates example
let c1 = {
  x: 2,
  y: 8,
};
let c2 = {
  x: 75,
  y: 220,
};

const logCoords = function () {
  return `COORDINATES: ${this.x}, ${this.y}`;
};

let c1Coords = logCoords.bind(c1);

// console.log(c1Coords());

let c2Coords = logCoords.bind(c2);

// console.log(c2Coords());

let c3 = {
  x: 23.44525435345,
  y: 98.44525435345,
};

let c3Coords = logCoords.bind(c3);

// console.log(c3Coords());

////////////////////////////////////////////////////////////
// CALL

// use call to convert arguments into an actual array
function argsToArray() {
  const newArr = [].slice.call(arguments);
  console.log(newArr);
}

argsToArray("Charmander", "Bulbasaur", "Squirtle");

var objCall = { num: 2 };
function add(a) {
  return this.num + a;
}

add.call(objCall, 3);

// console.log(objCall);

////////////////////////////////////////////////////////////
// APPLY

/// Random for...in stuff
const sports = {
  hockey: {
    sticks: true,
    periods: 3,
  },
  soccer: {
    sticks: false,
    periods: 2,
  },
  baseball: {
    sticks: false,
    periods: 9,
  },
};

const sports2 = ["hockey", "soccer", "baseball"];
// for (let sport in sports) {
//   console.log(sport);
// }
// for (let hockey in sports.hockey) {
//   console.log(hockey);
// }

const allSports = Object.keys(sports);
const allSportVals = Object.values(sports);
const allSportsAndInfo = Object.entries(sports);
// const sportsAll = Object.entries(sports);

console.log(allSports);
console.log(allSportVals);
console.log(allSportsAndInfo);

let text = "";
for (let x in sports2) {
  console.log(x);
}
