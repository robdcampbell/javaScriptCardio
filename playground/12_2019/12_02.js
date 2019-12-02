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

// found here: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash

let randomNum = Math.floor(Math.random()*100)+1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultsDiv = document.querySelector('.resultParas');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');


let guessCount = 1;
let resetButton;

// Event listeners
guessSubmit.addEventListener('click', checkGuess);

function checkGuess(){
    let userGuess = Number(guessField.value);

    if(guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';    
    }
    guesses.textContent += userGuess + ' ';

    if(userGuess === randomNum){   
        lastResult.textContent = 'Congratulations! You go it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if(guessCount === 10){
        lastResult.textContent = '!!! GAME OVER !!!'
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNum){
            lowOrHi.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNum){
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }


    guessCount++;
    guessField.value = '';
    guessField.focus();
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    resultsDiv.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum)
  }

console.log(randomNum)
