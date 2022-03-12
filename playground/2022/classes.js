// OBJECT EXAMPLE WITH DEFAULTS
/*  
    This class example show how an obect can be passed into the 
    constructor and destrutured with default values. This helps
    with passing values in using keys rather than position in
    the class instatiation argument. 

    - create class 
    - create class with default values (with literal arguments, and then with object deconstruction) 
    - extend the class to another class
    - 
*/

class myClass {
  constructor(
    { a = "default a value", b = "default b value", c = "default c value" } = {
      a: "default option a",
      b: "default option b",
      c: "default option c",
    }
  ) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}
var v = new myClass({ a: "a value", b: "b value" });
var w = new myClass();

// END OBJECT EXAMPLE WITH DEFAULTS

// class Vehicle {
//   constructor(
//     { numWheels = 18, weight = 150 } = { numWheels: 18, weight: 150 }
//   ) {
//     this.numWheels = numWheels;
//     this.weight = weight;
//   }
//   vehicleInfo() {
//     return `This vehicle has ${this.numWheels} wheels and weighs ${this.weight} lbs.`;
//   }
// }

class Vehicle {
  constructor(
    { numWheels, weight } = { numWheels, weight }
  ) {
    this.numWheels = numWheels;
    this.weight = weight;
  }
  vehicleInfo() {
    return `This vehicle has ${this.numWheels} wheels and weighs ${this.weight} lbs.`;
  }
}

const tricycle = new Vehicle({ numWheels: 3, weight: 15 });
const bike = new Vehicle(2, 15);

// extend the class
class Car extends Vehicle {
  // pass in as object
  constructor({ model, year, color, numWheels, weight }) {
    super(numWheels, weight);
    this.weight = weight;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  carInfo() {
    return `Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, # of wheels: ${this.numWheels}, Weight: ${this.weight} `;
  }
}

const jeep = new Car({
  model: "Jeep",
  color: "Black",
  year: "2020",
  numWheels: 4,
  weight: 2000,
});
const HondaCB750 = new Car({
  model: "Honda",
  color: "Black",
  year: "1970",
  numWheels: 2,
  weight: 1200,
});

console.log(HondaCB750.carInfo());

// _ _ _ _ _ _ _ _ _ _ _ 

class User {
  constructor(
    {name="john", age=30, accountType='standard'} = {name:"john", age:30, accountType:'standard'}
    ){
    this.name = name;
    this.age = age;
    this. accountType = accountType;
  }
  getUserInfo(){
    return `Username: ${this.name}. Age: ${this.age}. Permissions: ${this.accountType}`
  }
}

class NintendoChar extends User {

  constructor({name, age, accountType}){
    super (name, age, accountType);
    this.name = name;
    this.age = age;
    this.accountType = accountType;
  }

}

const adminUser = new User({name: 'Burt Reynolds', age:55, accountType: 'Admin'});
const standardUser = new NintendoChar({name: 'Mario', age:50});
// console.log(adminUser.getUserInfo());
// console.log(standardUser.getUserInfo());