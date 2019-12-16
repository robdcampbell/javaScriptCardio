const person = {
  "name" :"Stan Rogers",
  "age" : "30",
  "interests" : ['tech','detroit','paint'],
  "greeting" : function(name,age){
    return `Hello ${this.name}, your interested in ${this.interests[0]}? Cool.`
  } 
}


console.log(person.greeting());