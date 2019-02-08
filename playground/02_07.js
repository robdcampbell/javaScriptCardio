const Person = function(name, age, gender){
    this.name = name;
    this. age = age;
    this.gender = gender;
}

Person.prototype.getSummary = function(){
    return `${this.name} is a ${this.age} ${this.gender}`;  
};
   
const rob = new Person('Rob Campbell', 29, 'Male');



const str = 'Hello';
const arr = [1,2,3,4,5,6];

const reverseArr = arr.reverse();

console.log(reverseArr);

const reverseStr = (str)=>{
  
  let reversed = '';
  for(let i = str.length-1; i >= 0  ; i-- ){
      reversed += str[i];
  }
  return reversed;
}

console.log(reverseStr(str));