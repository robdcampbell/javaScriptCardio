// Factory function, is just a function that creates objects and returns them

// Simple, No duplicates, Data privacy!(protects the vals passed as args)

// factory function using object destructuring
const person = function ({ firstName, lastName, age }) {
  console.log(firstName);
  return {
    firstName,
    lastName,
    age,
    greeting() {
      return `Hello ${this.firstName}!`;
    },
  };
};

const rob = person({ firstName: "rob", lastName: "campbell", age: 33 });

// VS:

function Animal(name, legs) {
  this.name = name;
  this.legs = legs;
  //   this.runsOn = function () {
  //     return `A ${this.name} runs on ${this.legs} legs `;
  //   };
}

Animal.prototype.runsOn = function () {
  return `A${this.name} runs on ${this.legs} legs `;
};

const dog = new Animal("dog", 4);

console.log(dog.runsOn());
