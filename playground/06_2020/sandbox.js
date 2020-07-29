
// Class Practice
class Car {
    constructor(make, model, color, year){
        this.make = make;
        this.model = model;
        this.color = color;
        this. year = year;
    }

    getInfo(){
        return `${this.year} ${this.make} ${this.model}, ${this.color}`
    }
}
// First Car Instantiation
const firstCar = new Car('Jeep','Cherokee', 'White', 1998);

console.log(firstCar.getInfo())

// Extend car class to Racing Vehicles
    /*
        class raceVehicle extends Car{
                constructor(wheels){
                    this.wheels = wheels;
                }
                
                getRaceStyle(){
                    return this.wheels <= 2 ? 'Moto' : 'Car';
                }
        }

        // Extended class, new instantiation
        const firstMoto = new raceVehicle(2);
        console.log(firstMoto.getRaceStyle());
    */
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

// Closure practice

function closureTest(n1){
        
    return function(n2){
        return n1+n2;
    }
}

let numTest = closureTest(4);

console.log(numTest(6));

// C2

function transport(make){
    return function(model){
        return `You drive a ${make} ${model}, thats reeeeeeeeal neat bud`
    }
}

const jeep = transport('Jeep');
console.log(jeep('Cherokee'))


// C3

function secretMessage(){
    let secret = `Holy Hot Dogs Batman, you've done it!`;
    
    return function(pass){
        return pass === 'Dikembe' ? secret : 'NO NO NO (giant finger wags)';

    }     
}

const password = 'dikembe '

console.log()