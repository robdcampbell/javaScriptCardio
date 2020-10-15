
// Object Literal 
const John = {
  name : 'John',
  age: '34',
  occupation: 'Fisherman',
  pet: 'Pterodactyl'
}




// Person Constructor 
function Person(firstName, lastName, dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // Method (function inside an object)
    // Better to do this using an Object prototype
  /*
      this.calculateAge = function(){
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear()-1970);
      }
  */
}

// Calculate Age (person prototype)
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear()-1970);
  }

// Get Full Name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}

// Last Name Change
Person.prototype.changeLastName = function(newLastName){
  this.lastName = newLastName;
} 


const john = new Person('John', 'Doe', '10-29-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(john);
console.log(mary);
console.log(mary.getFullName());
mary.changeLastName('Smith');
console.log(mary.getFullName());
console.log(mary.hasOwnProperty('firstName'));