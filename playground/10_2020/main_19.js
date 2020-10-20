

// Classes

    /*
        class Person {
            constructor(firstName, lastName,dob){
                this.firstName = firstName;
                this.lastName = lastName;
                this.birthday = new Date(dob);
            }  
            greeting(){
                return `Hello there ${this.firstName} ${this.lastName}`;
            }
            calculateAge(){
                const diff = Date.now() - this.birthday.getTime();
                const ageDate = new Date(diff); 
                return Math.abs(ageDate.getUTCFullYear()-1970);
            }
            getsMarried(newLastName){
                this.lastName = newLastName;
            }

            static addNumbers(x,y) {
                return x + y;
            }
        }

        const mary = new Person('Mary', 'Williams', '11-13-1980');

        mary.getsMarried('Thompson');

        console.log(mary);

        console.log(Person.addNumbers(1,4));

    */


    // Sub Classes

    class Person {
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
        }
        greeting(){
            return `Hello there ${this.firstName} ${this.lastName}`;
        }
    }

    class Customer extends Person {
        constructor(firstName, lastName, phone, membership){
            super(firstName, lastName);
            this.phone = phone;
            this.membership = membership;
        }
    }
    
    // class Customer extends Person {
    //     constructor(firstName, lastName, phone, membership){
    //         super(firstName,lastName);
    //         this.phone = phone;
    //         this.membership = membership;
    //     }
    // }

    const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

    console.log(john);


// ****************************************************
    


// Creating Objects using Object.create();

    /*
        const personPrototypes = {
            greeting: function(){
                return `Hello there ${this.firstName} ${this.lastName}`;
            },
            getsMarried: function(lastName){
                this.lastName = lastName;
            }
        }

        const mary = Object.create(personPrototypes);
        mary.firstName = 'Mary';
        mary.lastName = 'Williams';
        mary.age = 30;

        mary.getsMarried('Thompson');

        console.log(mary.greeting());

        const brad = Object.create(personPrototypes,{
            firstName: {value: 'Brad'},
            lastName: {value: 'Traversy'},
            age: {value: 36}
        })

        console.log(brad);
        console.log(brad.greeting());

    */



 // Practicing from 10/15:
/*
        // Create a person constructor 
        function Person(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
        }

        // Add Greeting prototype to Person Constuctor
            Person.prototype.greeting = function(){
                return `Hello ${this.firstName} ${this.lastName}!`
            }

            const burt = new Person('Burt', 'Reynolds')
            console.log(burt.greeting());

        // Create Customer constructor 
        
            function Customer(firstName, lastName, member, cost){
            Person.call(this, firstName, lastName);
            this.member = member;
            this.cost = cost;
        }
    
        // Inherit Person prototype methods
        Customer.prototype = Object.create(Person.prototype);

        // Make customer.prototype return Customer();
            Customer.prototype.constructor = Customer;        

        // Overwrite Person greeting with a new Customer Greeting
        Customer.prototype.greeting = function(){
                return `lace up your boots, ${this.firstName} ${this.lastName}`;
        }

        const rick = new Customer('Rick', 'Sanchez', 'Ultra', 69420);

        console.log(rick.greeting());
    */