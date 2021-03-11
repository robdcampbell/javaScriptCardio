

// OOP practice with NetNinja:

/*
https://www.youtube.com/watch?v=4l3bTDlT6ZI&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=2&t=0s
*/


// SYLLABUS:
/*
    - creating objects using literal notations
     -Javascript Classes and Constructors 
     -Inheritance
     -Method Chaining
     -Prototype and Prototype inheritance 

*/

/*********************  ****************** */
// 01  - Object Literals

/*  The info we'll stop in the Object
        let userOneEmail = 'ryu@ninjas.com';
        let userOneName = 'Ryu';
        let userOneFriends = ['Yoshi'];

        function login(email){
            console.log(email, 'is now online');
        }

        function logout(email){
            console.log(email, 'has logged out');
        }

        function logFriends(friends){
            friends.forEach(friend=>{
                console.log(friend);
            })
        }

        login(userOneEmail);
*/

// OBJECT LITERALS:
/*
const userOne = {
    email: 'ryu@ninjas.com',
    name:'Ryu',
    // old way: 
    // login: function(){};
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email,'has logged out')
    }
}
*/

    //console.log(userOne.login());

// UPDATING OBJECT LITERALS:
    /*
    userOne.name = 'Yoshi';
    console.log(userOne.name);
    */



/*********************  ****************** */

// CLASSES
 
// the 'new' keyword
// - creates a new empty object {}
// - set the value of 'this' to be the new empty object
// - calls the constructor method

/*
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in.');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out.')
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}
*/

//https://www.youtube.com/watch?v=hy-C4NY7A_8&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=6

// userOne.login();
// userTwo.logout();

/*
 METHOD CHAINING; made possible by: return this, in each method.
 You are essentially returning the object instance and 
  calling the method from the object using dot notation
userOne.login().updateScore().updateScore().logout();
*/


/*********************  ****************** */ 

// Class inheritance _______________________________

/*
        class Admin extends User {
            deleteUser(user){
                users = users.filter(u => (u.email !== user.email));
                return `${user.name} deleted!`
            }
        }

        let userOne = new User('ryu@ninjas.com','Ryu');
        let userTwo = new User('yoshi@mariocorp.com','Yoshi');

        let users = [userOne,userTwo];

        let adminOne = new Admin('rob@rob.com','Rob');
        console.log(adminOne);
        console.log(users);

        console.log(adminOne.deleteUser(userOne));

        console.log(users);

*/ //End class inheritance 

/********************* ******************  */

// Using object contructors intead of classes:_______________________________

function User(email,name){
    this.email = email;
    this. name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(`${this.email} has logged in.`);
}
User.prototype.logout = function(){
    this.online = false;
    console.log(`${this.email} has logged out.`);
}

function Admin(...args) {
    User.apply(this, args);
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email !== u.email;
    })
};

let userOne = new User('ryu@ninjas.com','Ryu');
let userTwo = new User('yoshi@mariocorp.com','Yoshi');
let admin = new Admin('shaun@ninjas.com','Shaun')

let users = [userOne, userTwo, admin];

console.log(admin);


// practice again

/* 1) create class
    - create new instance
    - create different class that inherits from another class
    
   - 2) Create object contructor (prototype inheritance)
       - create new instance
        - create different object that inherits from another class
    
*/

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.greeting = function(){
        return `Hey! Nice ${this.make}!`
    }
}

Car.prototype.carInfo = function (){
    return `${this.year} ${this.make} ${this.model}`
}

const jeep = new Car('Jeep', 'Cherokee', 2000);

function GovVehicle(...args){
    Car.apply(this, args);
    this.parkAnywhere = true;

}
GovVehicle.prototype = Object.create(Car.prototype);

const policeCar = new GovVehicle('Chevrolet','Impala','2019');


console.log(jeep.greeting())
console.log(jeep.carInfo());
console.log(policeCar);


class Vehicle {
    constructor(wheels, seats, color){
        this.wheels = wheels;
        this.seats = seats;
        this.color = color;
    }

    vehicleInfo(){
        return `This ${color} vehicle has ${wheels} wheels and ${seats} seats.`;
    }
}


const motorcycle = new Vehicle(2,1,'Black');

console.log(motorcycle.vehicleInfo());

/*
Built in Object functions:

apply() -https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
bind()

*/