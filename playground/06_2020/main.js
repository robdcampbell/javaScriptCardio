

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

let userOne = new User('ryu@ninjas.com','Ryu');
let userTwo = new User('yoshi@mariocorp.com','Yoshi');

//https://www.youtube.com/watch?v=hy-C4NY7A_8&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=6

// userOne.login();
// userTwo.logout();

// METHOD CHAINING; made possible by: return this, in each method.
// You are essentially returning the object instance and 
// calling the method from the object using dot notation
userOne.login().updateScore().updateScore().logout();