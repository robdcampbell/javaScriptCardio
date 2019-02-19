
// "Private" Variable/Secret Variables

    // function secretVariable(){
    //   let private = "My secret code"
    //   return function(){
    //     return private;
    //   }
    // }

    // const getTheSecret = secretVariable();

    // console.log(getTheSecret());


const hero = {
    _name :'John Doe',
    getSecretIdentity: function(){
      return this._name;
    }
};

const stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity()); // will return Undefined
console.log(hero.getSecretIdentity()); // will return John Doe

/* -> to make this work, you need to add the following:
  const stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

  You need to rebind the hero object to the function when assigning the getSecretIdentity() function to a new variable. 
*/