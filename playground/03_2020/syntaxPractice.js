
// JS file to continue practice of JS syntax, refactoring, and getting used to newer version of javaScript.


// SWITCH STATEMENTS
// I seldom use these, but wanna drive the syntax home.

function switchTest(val){
    let answer = "";
    
    switch(val){ 
        case 1:
            answer = 'First!'
            break;
        case 2:
            answer = 'Second!'
            break;
        case 3:
            answer = 'Third!'
            break;
    }

    return answer;

}

console.log(switchTest(2))