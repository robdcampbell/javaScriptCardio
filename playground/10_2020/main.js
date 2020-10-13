
// Object Literal 

const John = {
  name : 'John',
  age: '34',
  occupation: 'Fisherman',
  pet: 'Pterodactyl'
}

// Person Constructor 
function Person(name, dob){
  this.name = name;
  //this.age = age;
  this.birthday = new Date(dob);
  // Method (function inside an object)
  this.calculateAge = function(){
   const diff = Date.now() - this.birthday.getTime();
   const ageDate = new Date(diff);
   return Math.abs(ageDate.getUTCFullYear()-1970);
  }
}

const burtReynolds = new Person('Burt Reynolds', '10-16-1980');
console.log(burtReynolds.calculateAge());