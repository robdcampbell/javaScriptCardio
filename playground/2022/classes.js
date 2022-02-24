// OBJECT EXAMPLE WITH DEFAULTS
/*  
    This class example show how an obect can be passed into the 
    constructor and destrutured with default values. This helps
    with passing values in using keys rather than position in
    the class instatiation argument. 
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

class Vehicle {
  constructor(
    { numWheels = 18, weight = 150 } = { numWheels: 18, weight: 150 }
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
