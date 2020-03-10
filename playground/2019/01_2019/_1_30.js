// Daily Vanilla Javascript Cardio 


// _______ Javascript methods _________ Be able to explain these (and what data types they apply to).
/*
split()  :

splice()  :

indexOf() :

push() :

pop() :

shift()  :

unshift()  :

map()  :

sort()  :

filter()  :

charCodeAt()  :

charCode()  :



*/

// const str = 'hello'
// const arr = [1,2,3,4,5]
// const newStr = str.split('');

// console.log(newStr);

// console.log(str);
// let newName = ''


// REVERSE AN ARRAY

// 1.
    // const reverse = function(arr){
    //   let rev = [];
    //   arr.forEach((i) => {
    //     rev.unshift(i);
    //   });
    //   return rev;
    // };

// 2.
  //const reverse = ((val) => val.reverse()); 


//console.log(reverse(arr));


// REVERSE A STRING: algorithm (decrementing for loop)
// const str = 'hello'
      // const revStr = ((str) =>{
      //   let reverse = '';
      //   for(let i=str.length-1; i>=0; i--){
      //     reverse += str[i];
      //   }
      //   return reverse;
      // })

// REVERSE A STRING: built-in methods 

        // const revStr = ((str)=>{
        //   // 1)
        //   // const arr = Array.from(str);
        //   // const reverse = arr.reverse();
        //   // const done = reverse.join('');
        //   // return done;
          
        //   // 2)
        //   return str.split("").reverse().join("");
        // });

// REVERSE A STRING: Recursion
  const str = 'hello'

  //console.log(revStr(str));


    /* recurision: a function that calls itself, from inside */

    let add = function (n){
      if(n<=0){
        return 0
      } else {
        return n + add(n-1);
      }
    }

    console.log(add(3));
    const string = "station"
    const stringFirst = string.substr(1);
    

    //console.log(string.substr(1)+str.charAt(0));


    let reverse = ((str)=> {
      if(str === ''){   // terminal call that ends recursion
          return '';
      } else {
        return reverse(str.substr(1)) + str.charAt(0);
      }
    });

    console.log(reverse(string));