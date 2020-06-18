

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

function Person(email,name){
    this.email = email;
    this. name = name;
    this.online = false;
}

Person.prototype.login = function(){
    this.online = true;
    console.log(`${this.email} has logged in.`);
}
Person.prototype.logout = function(){
    this.online = false;
    console.log(`${this.email} has logged out.`);
}
let personOne = new Person('ryu@ninjas.com','Ryu');
let personTwo = new Person('yoshi@mariocorp.com','Yoshi');

console.log(personOne.login());

