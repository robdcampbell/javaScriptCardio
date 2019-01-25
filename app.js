// Daily Vanilla Javascript Cardio 


// **** 1/24/2019 **** //  DAY 1

//Exploring: bind()
        // const person = {
        //     firstName: 'Rob',
        //     lastName: 'Campbell'
        // };

        // console.log(person.firstName)

        // const getName = function(){
        //     console.log(`${this.firstName} ${this.lastName}`)
        // };

        // getName(); // will be undefined 

        // const getNameBind = getName.bind(person);

        // getNameBind();

        /*
            Bind: The bing method returns another function, with the 'this' already bound 
            to the object passed in. So in the first example, you can see we can getName(),
            bind the 'person' object to it, and assign the function to the variable 
            'getNameBind()'. We then invoke to get the proper output.
        */

// Exploring: call()
        // const person = {
        //     firstName: 'Rob',
        //     lastName: 'Campbell'
        // };

        // const getName = function(a,b){
        //     console.log(`${this.firstName}. The arguments passed are ${a} and ${b}`);
        // }

        // getName.call(person,1,2);

        /*
            Call: The call method executes our function immediately, with the 'this'
            bound to the object you pass in the first argument. In the 2nd example, 
            you can see we call the getName function with the '.call' method, we bind
            the 'person' object to it, and then pass the arugments following the object
            (in this case 1 and 2). The function gets executed immediately and is output
            to the console.
        */

// Exploring: apply()

            // const person = {
            //     firstName: 'Rob',
            //     lastName: 'Campbell'
            // };

            // const getName = function(a,b){
            //     console.log(`${this.firstName}. The arguments passed are ${a} and ${b}`);
            // };

            // const arr = [2,3];

            // getName.apply(person, arr);
    
            /*
                Apply: The apply method is similar to call. It executes the function 
                immediately like call, however it only accepts an array as the second
                argument. In this case we call the getName function with apply, we bind
                the 'this' to the 'person' object, and pass the array as a 2nd argument.
            */

            
// TYPES OF OBJECTS

    //OBJECT LITERAL
                // const person {
                //     firstName:'Rob',
                //     lastName:'Campbell'
                // }
            

    // USING A CONSTRUCTOR FUNCTION
                // function Person(firstName, lastName,age){
                //     this.firstName = firstName;
                //     this.lastName= lastName;
                //     this.age = age;
                // };
                
        // PROTOTYPICAL METHOD INHERITANCE
                // Person.prototype.sayHello = function(){
                //     console.log(`Hello ${this.firstName} ${this.lastName}`)
                // }

                // const john = new Person('John','Smith','45')

                // console.log(john.sayHello());

                // console.log(Person.prototype);

    // USING A CLASS - - - SYNTACTIC SUGAR, UNDERSTAND PROTOTYPE INHERITANCE
                // class Person{
                //     constructor(firstName, lastName, age){
                //         this.firstName = firstName;
                //         this.lastName = lastName;
                //         this.age = age;
                //     }

                //     sayHello(){
                //         console.log(`Hello, ${this.firstName} ${this.lastName}`);
                //     }
                // }
                
                // const john = new Person('John', 'Smith', '45');

                // console.log(john.sayHello());