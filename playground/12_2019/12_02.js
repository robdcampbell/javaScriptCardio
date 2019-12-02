//console.log('test');

// const searchButton = document.querySelector('.btn')
// const output = document.querySelector('.output');
// const input = document.querySelector('.search_main');

// searchButton.addEventListener('click',searchVal)

// function searchVal(e){
//     console.log(input.value);

//     e.preventDefault();
// }



// Number Guessing Game

const randomNum = Math.floor(Math.random()*100)+1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;




console.log(randomNum)
