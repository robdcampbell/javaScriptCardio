const Person = function(name, age, gender){
    this.name = name;
    this. age = age;
    this.gender = gender;
}


Person.prototype.getSummary = function(){
    return `${this.name} is a ${this.age} ${this.gender}`;  
};
   

const rob = new Person('Rob Campbell', 29, 'Male');

console.log(rob.getSummary());
