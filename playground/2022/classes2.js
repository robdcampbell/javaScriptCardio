// console.log("pterodactyl")

class Character{
    constructor({age=1, name="pokeName", level=1} = {age:100,name:'pokeName_0',level:100}){
        this.age = age;
        this.name = name;
        this.level = level;
    }
    getCharInfo(){
        return `Character name: ${this.name}.  Character age: ${this.age}. Character level: ${this.level}`
    }
}

const player1 = new Character({name:'Mewtwo', age: 35, level: "99"})
const playerTest = new Character({name:'Test', age: 3})
// * Important note: must pass empty object to get default object values from parent class
const player0 = new Character({})
//
// console.log(player0);
// console.log(player0.getCharInfo());
//
// console.log(playerTest);
// console.log(playerTest.getCharInfo());

class WaterType extends Character{
    constructor({age=99, name, level, type="water"}){
       super({age, name, level})
        // this.age = age;
        // this.name = name;
        // this.level = level;
        this.type = type;
    }
}

const player2 = new WaterType({age:20, type:"Earth"})

console.log(player2);
console.log(player2.getCharInfo());

