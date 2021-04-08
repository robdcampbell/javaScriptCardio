/* 

===============================
OOP Cardio.
===============================

after, TODO:
  : create a user (object constructor, then class)
    - 2 properties, 2 methods (that can method-chain)
    
  : create an admin (extend user object constructor, then extend user class)

- object literal 
- object constructor 
- object prototype 
- object prototype inheritance 

- class
  - class properties
  - class methods
- extending a class
- "new" keyword:
    - the "new" keyword creates a new obj
    - sets the value of 'this' to be the new instantiated object
    - calls the constructor method of the original class declaration
- chaining class methods by returning 'this' in class method
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
const character = {
  name: "Yoshi",
  age: 37,
  login() {
    return `You are now logged in as: ${this.name}`;
  },
};

//console.log(userOne.login());
character.name = "Link";
character.retort = function () {
  return `My name is ${this.name}, Zelda is the princess!`;
};

//console.log(character.retort());
// can use bracket notation to dyamically select properties from objects
//console.log(character["age"]);
//const prop = "age";
//console.log(character[prop]);

//////////////////////////////////////////////////////

// 2) Object Constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greeting = function () {
    return `Hello ${name}, you are ${age} years old`;
  };
}

Person.prototype.getName = function () {
  return `Hello: ${this.name}!`;
};

const ryu = new Person("Ryu", 30);

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
    this.health = 100;
  }
  login() {
    return `${this.name} just logged in.`;
  }
  logout() {
    return `${this.name} just logged out.`;
  }

  action() {
    return `${this.name} attacks with as a ${this.type} type pokemon`;
  }
  damage() {
    this.health--;
    console.log(`${this.name}'s health is now ${this.health}`);
    // *** for method chaining, return this to return the object;
    return this;
  }
}

const hypno = new Pokemon("Hypno", 4, "Psychic");
//console.log(hypno.action());
// console.log(waterType.login());
// console.log(waterType.logout());
// hypno.damage().damage().damage();

// Class with extension

class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.score = 0;
  }
  greeting() {
    console.log(`Hello, my name is ${this.name}`);
  }
  updateScore() {
    this.score++;
    console.log(`${this.name}'s score is now: ${this.score}.`);
    return this;
  }
}

//const player1 = new User("Yoshi", 55, "yoshi@gmail.com");
//player1.updateScore().updateScore().updateScore();

// extend User class for Admin User

class Admin extends User {
  constructor(name, age, email, admin) {
    super(name, age, email);
    this.admin = admin;
  }
  deleteUser(user) {
    users = users.filter((u) => u.email !== user.email);
  }
}

const userOne = new User("Mario", 55, "mario@gmail.com");
const userTwo = new User("Luigi", 55, "luigi@gmail.com");
const adminUser = new Admin("Rob", 32, "rob@gmail.com", true);

let users = [userOne, userTwo];
//console.log(users);
adminUser.deleteUser(userTwo);
//console.log(users);
console.log(adminUser);
