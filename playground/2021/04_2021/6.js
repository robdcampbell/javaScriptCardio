/* 

===============================
OOP Cardio.
===============================

- object literal 
- object constructor 
- object prototype 
- object prototype inheritance 

- class
- extending a class

*/

/* notes:

- creating objects using object literals
- JavaScript classes and constructors 
- inheritance
- Method Chaining
- Prototypes and Prototype Inheritance 


*/

////////////////////////////////////////////////////////

// 1) Object literal
const userOne = {
  name: "Yoshi",
  age: 37,
  login() {
    return `You are now logged in as: ${this.name}`;
  },
};

//console.log(userOne.login());
userOne.name = "Link";
userOne.retort = function () {
  return `My name is ${this.name}, Zelda is the princess!`;
};

//console.log(userOne.retort());
// can use bracket notation to dyamically select properties from objects
//console.log(userOne["age"]);
//const prop = "age";
//console.log(userOne[prop]);

//////////////////////////////////////////////////////

// 2) Object Constructor
function User(name, age) {
  this.name = name;
  this.age = age;
  this.greeting = function () {
    return `Hello ${name}, you are ${age} years old`;
  };
}

User.prototype.getName = function () {
  return `Hello: ${this.name}!`;
};

const ryu = new User("Ryu", 30);

// console.log(ryu.greeting());
// console.log(ryu);
// console.log(ryu.getName());

////////////////////////////////////////////////////////

// 3) Classes

class Pokemon {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  action() {
    return `${this.name} attacks with as a ${this.type} type pokemon`;
  }
}

const waterType = new Pokemon("Squirtle", 4, "Water");
console.log(waterType.action());
