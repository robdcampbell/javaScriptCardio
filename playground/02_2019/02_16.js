      // //console.log('test');


      // // Prototypal inheritance practice:

      // // OBJECT CONSTRUCTOR  (can use Class in ES6, but its sugar g-damnit)
      // function Animal(name) {
      //   this.name = name;
      // };

      // Animal.prototype = {
      //     constructor: Animal,
      //     numLegs: 2,
      //     summary: function() {
      //       console.log(`This is a ${this.name}`)
      //     }
      // }

      // // Will return a constructor function in console.
      // //console.log(Animal);  


      // // New Instance of Animal -- using 'NEW'
      // const lizard = new Animal('Lizard',false);
      // // console.log(lizard.summary());
      // // console.log(lizard instanceof Animal)

      // let ownProps = [];
      // let prototypeProps = [];

      // // Demonstrating property inheritance
      // for(let property in lizard){
      //   if(Animal.hasOwnProperty(property)){
      //       ownProps.push(property);
      //   } else {
      //     prototypeProps.push(property);
      //   }
      // };
      //     // console.log(ownProps);
      //     // console.log(prototypeProps);


      // // New Instance of Animal -- using 'Object.create(obj)'
      // function Bird(){};
      // Bird.prototype = Object.create(Animal.prototype);
      // Bird.prototype.constructor = Bird;

      // let duck = Object.create(Bird.prototype);
      // //bird.prototype.constructor = bird;
      // duck.name = "Duck";

      // console.log(duck);

      // //console.log(Animal);



// FUNCTIONAL JS - passing function as arguments to       

        // // the global variable
        // var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

        // /* This function should add a book to the list and return the list */
        // // New parameters should come before the bookName one

        // // Add your code below this line
        // function add (addBookList, bookName) {
        //   const newList = addBookList.slice();
        //   newList.push(bookName);
        //   console.log(newList);
        //   return newList;
          
        //   // Add your code above this line
        // }

        // /* This function should remove a book from the list and return the list */
        // // New parameters should come before the bookName one

        // // Add your code below this line
        // function remove (removeBookList, bookName) {
        //   const newList = removeBookList.slice(); 
        //   if (newList.indexOf(bookName) >= 0) {
        //     const index = newList.indexOf(bookName);
        //     newList.splice(index, 1);
        //     return newList; 
        //     }
        // }

        // var newBookList = add(bookList, 'A Brief History of Time');
        // var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
        // var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

        // console.log(newestBookList);
        // console.log(bookList);


// USING slice() to create an array copy, then splice() to remove specified item
          // const arr = ['dog', 'cat', 'giraffe', 'emu', 'alligator', 'gorilla'];

          // const newArr = arr.slice();
          // const index = newArr.indexOf('emu');
          // newArr.splice(index,1);

          // console.log(newArr);
          // console.log(arr);

    