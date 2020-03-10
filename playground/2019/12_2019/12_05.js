//console.log('test!')

const myStr = 'Hi hi hi there, this is my greeting text. Hi!';

function changeWord(str, newWord){
    
    let lowerStr= str.toLowerCase();
    return lowerStr.replace(/\bhi/g, newWord);
    
}

console.log(changeWord(myStr,'Yo!'))