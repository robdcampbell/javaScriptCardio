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

console.log(c1Coords());

let c2Coords = logCoords.bind(c2);

console.log(c2Coords());

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

console.log(objCall);

////////////////////////////////////////////////////////////
// APPLY
