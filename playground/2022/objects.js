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
  console.log(this.x, this.y);
};

let c1Coords = logCoords.bind(c1);

console.log(c1Coords());

////////////////////////////////////////////////////////////
// CALL

////////////////////////////////////////////////////////////
// APPLY
