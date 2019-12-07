// // console.log('test, its working');


console.log('test');

function switchTest(val){

  
}

console.log(switchTest(3));

/// Story Generator
 
// // 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

// const customName = document.getElementById('customname');
// const randomize = document.querySelector('.randomize');
// const story = document.querySelector('.story');

// function randomValueFromArray(array){
//   return array[Math.floor(Math.random()*array.length)];
// }

// // 2. RAW TEXT STRINGS

// let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// const insertX = [
//   'Willy the Goblin',
//   'Big Daddy',
//   'Father Christmas'
//   ]

// const insertY = [
//   'the soup kitchen',
//   'Disneyland',
//   'the White House'
//   ]

// const insertZ = [
//   'spontaneously combusted',
//   'melted into a puddle on the sidewalk',
//   'turned into a slug and crawled away'
//   ]

// // 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

// randomize.addEventListener('click', result);

// function result() {

//   let newStory = storyText;
//   const xItem = randomValueFromArray(insertX);
//   const yItem = randomValueFromArray(insertY);
//   const zItem = randomValueFromArray(insertZ);

//   // replace with a regular expression
//   newStory = newStory.replace(/:insertx:/g, xItem).replace(/:inserty:/g, yItem).replace(/:insertz:/g, zItem);
//   //newStory = newStory.replace(/:inserty:/g, yItem);
//   //newStory = newStory.replace(/:insertz:/g, zItem);

//   if(customName.value !== '') {
//     let name = customName.value;
//     newStory = newStory.replace(/Bob/g, name)
//   }

//   if(document.getElementById("uk").checked) {
//     let weight = Math.round(300/14) + ' stone';
//     let temperature =  Math.round((94 - 32) * 5/9) + ' centigrade';

//     newStory = newStory.replace(/94 fahrenheit/g, temperature);
//     newStory = newStory.replace(/300 pounds/g, weight);

//   }

//   story.textContent = newStory;
//   story.style.visibility = 'visible';
// }