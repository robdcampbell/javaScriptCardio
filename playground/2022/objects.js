function User({name,email}){
    this.name = name;
    this.email = email;
}

User.prototype.userInfo = function(){return `${this.name} is from Pallet Town!`};

const user1 = new User({name:"Ash", email:"ash@pokemon.com"})

console.log(user1.userInfo())
