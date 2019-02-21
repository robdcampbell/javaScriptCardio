// REGULAR EXPRESSIONS

    // Test
        // let myStr = 'Hello world';
        // let myRegex = /Hello/;

        //  console.log(myRegex.test(myStr));
    
    //Match
        // let newStr = 'Hello World!';
        // let regEx = /Hello/i;

        // console.log(newStr.match(regEx));

    // Character Class
        // let myStr = 'Beware of bugs in the above code; I have only proved it correct, not tried it';
        // let myRegex = /[aeiou]/gi; // Will select any/all vowels
        // console.log(myStr.match(myRegex)); // returns an array of all the selected values;

    // Character Class with Numbers
        // let quoteSample = "Blueberry 3.141592653s are delicious.";
        // let myRegex = /[h-s2-6]/ig; // Change this line
        // let result = quoteSample.match(myRegex); // Change this line
        // console.log(result);
    
    // Match Single Characters not specified  -- [^ ]
        // NEGATED CHARACTER SETS

        // let quoteSample = "3 blind mice.";
        // let myRegex = /[^a-z0-9]/gi; // Change this line
        // let result = quoteSample.match(myRegex); // Change this line
        // console.log(result); will return []

    // Match Characters that Occur One or more Times -----  +
        // let difficultSpelling = "Mississippi";
        // let myRegex = /s+/gi; // Change this line
        // let result = difficultSpelling.match(myRegex);
        // console.log(result);    // Will return ["ss", "ss"]
    
    // Match characters that occur 0 or more times
        // let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
        // let chewieRegex = /aaa*/gi; // Change this line
        // let result = chewieQuote.match(chewieRegex);

    // Find characters with 'Lazy' Matching
        // let text = "<h1>Winter is coming</h1>";
        // let myRegex = /<h1*>/; // Change this line
        // let result = text.match(myRegex);
        // console.log(result);
    
    // Find strings that begin with "something" -- ^
        // let rickyAndCal = "Cal and Ricky both like racing.";
        // let calRegex = /^Cal/; // Change this line
        // let result = calRegex.test(rickyAndCal);
        // console.log(result);

    // Find strings that end with "something" -- $
        // let caboose = "The last car on a train is the caboose";
        // let lastRegex = /caboose$/g; // Change this line
        // let result = lastRegex.test(caboose);
        // console.log(result);
    
    
    // Match all Letters and Numbers:      /\w/g;
        // longhand: /[A-Za-z0-9_]+/ ;
        // shorthand: /\w+/g;

        // let quoteSample = "The five boxing wizards jump quickly.";
        // let alphabetRegexV2 = /\w/g; // Change this line
        // let result = quoteSample.match(alphabetRegexV2).length;

    // Match Everything BUT Letters and Numbers: -   /\W/g;
     
        // longhand: /[^A-Za-z0-9_]+/ ;
        // shorthand: /\W/g;
        // let quoteSample = "The five boxing wizards jump quickly.";
        // let nonAlphabetRegex = /\W/g; // Change this line
        // let result = quoteSample.match(nonAlphabetRegex).length;

    // Match all numbers
        // longhand: /[0-9]/g;
        // shorthand: /\d/g;

        // let numString = "Your sandwich will be $5.00";
        // let numRegex = /\d/g; // Change this line
        // let result = numString.match(numRegex).length;

    // Match all non-numbers:
        // Longhand: /[^0-9]/g;
        // shorthand: /\D/g;
        // let numString = "Your sandwich will be $5.00";
        // let noNumRegex = /\D/g; // Change this line
        // let result = numString.match(noNumRegex).length;

    // Restrict Possible Usernames

    /* 
        Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

        You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

        1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.

        2) Username letters can be lowercase and uppercase.

        3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters

    */
        // let username = "Oceans11";
        //         // my result let userCheck = /[$A-Za-z][$A-Za-z0-9]/; // Change this line
        // let userCheck = /^[a-z]{2,}\d*$/i;
        // let result = userCheck.test(username);
        // console.log(result);


    // 

    const arr = ['a','b','c','d','e','f'];

    const newArr = arr.splice(arr.indexOf('f'),1,'frankin');

    console.log(arr);
    console.log(newArr);