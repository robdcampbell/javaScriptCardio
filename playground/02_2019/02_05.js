// Continued practice with prototypal inheritance and classes

// const Person = function(name, age, gender){
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// Person.prototype.isAdult = function(){
//   return this.age >= 18;
// };

// const rob = new Person('Rob Campbell', 29, 'Male');

// console.log(rob.isAdult());

// Using a class

class Person {
  constructor(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  isAdult(){
    return this.age>=18;
  }
  listInfo(){
    return `${this.name} is ${this.age} and is ${this.gender}`;
  }
}

const rob = new Person('Rob', 29,'Male');

console.log(rob.listInfo());


class ProAthelete extends Person {
  constructor(name, age, gender,team){
    super(name, age, gender);
    this.team = team;
  }

  listInfo(){
    return `${this.name} plays for The ${this.team}`;
  }
}

const gordieHowe = new ProAthelete('Gordie Howe', 90, 'Male', 'Detroit Red Wings');

console.log(gordieHowe.listInfo());

