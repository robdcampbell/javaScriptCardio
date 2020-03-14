
// JS file to continue practice of JS syntax, refactoring, and getting used to newer version of javaScript.


// SWITCH STATEMENTS
// I seldom use these, but wanna drive the syntax home.

                // function switchTest(val){
                //     let answer = "";
                    
                //     switch(val){ 
                //         case 1:
                //             answer = 'First!'
                //             break;
                //         case 2:
                //             answer = 'Second!'
                //             break;
                //         case 3:
                //             answer = 'Third!'
                //             break;
                //         case 4:
                //         case 5:
                //         case 6:
                //             answer = 'almost!'
                //             break;
                //         default:
                //             answer = 'Enter 1, 2, or 3!'
                //             break;
                //     }

                //     return answer;

                // }

                // console.log(switchTest(4))

// OBJECT LITERAL

const myPet = {
    'Animal': 'Dog',
    'Name' : 'Stan',
    'Hometown': 'Detroit',
    'greeting' : function(){

    }
};
console.log(myPet.Animal);
myPet.Animal = 'Turtle'; // Re-assigns the property from dog to Turtle
console.log(myPet.Animal) // now returns turtle
