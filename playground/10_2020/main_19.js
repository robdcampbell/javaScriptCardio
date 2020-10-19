

// Creating Objects using Object.create();


   /*         
        const personPrototypes = {
            greeting: function(){
                return `Hello there ${this.firstName} ${this.lastName}`;
            },
            getsMarried: function(newLastName){
                this.lastName =  newLastName;
            }
        }

        const mary = Object.create(personPrototypes);

        mary.firstName = 'Mary';
        mary.lastName = 'Williams';
        mary.age = 30;

        mary.getsMarried('Thomspson');
        console.log(mary.greeting());

        const brad = Object.create(personPrototypes,{
            firstName: {value: 'Brad'},
            lastName: {value: 'Traversy'},
            age: {value: 36}
        });

        console.log(brad);
        console.log(brad.greeting());

    */


// Practicing from 10/15:


    // Create a person constructor 
        function Person(firstName, lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

    // Add Greeting prototype to Person Constuctor
        Person.prototype.greeting = function(){
            return `Hello ${this.firstName} ${this.lastName}!`
        };

        const pterodactyl = new Person('Ptero', 'dactyl', 69420)
        console.log(pterodactyl.greeting());

    // Create Customer constructor 
        function Customer(firstName, lastName, membership, cost){
            Person.call(this, firstName, lastName);
            this.membership = membership;
            this.cost = cost;
        }
 
    //Inherit Person prototype methods
        Customer.prototype = Object.create(Person.prototype);

        const customer1 = new Customer('Rick', 'Sanchez', 'Ultra', 42069)
        
        console.log(customer1.greeting());

    // Make customer.prototype return: Customer(); (instead of Person)
        Customer.prototype.constructor = Customer; 
    // Overwrite Person greeting with a new Customer Greeting
        Customer.prototype.greeting = function(){
            return `${this.firstName}, I'm in you son-of-a-bitch!`;
        }

        console.log(customer1.greeting());