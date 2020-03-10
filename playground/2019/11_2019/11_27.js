
// console.log('test_11/27');


// Longest Word

const sentence = 'hello there, this is my dog.'

function longestWord(sen){
  
  // Create filtered array 
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  
  // Sort by length
  const sorted = wordArr.sort((a,b) => b.length - a.length);
  console.log(sorted)

  // If multiple words, put into array
  const longestWordArr = sorted.filter(function(word){
    return word.length === sorted[0].length; 
  });
  return longestWordArr;
}

console.log(longestWord(sentence))

// Array Chunking

// Flatten Array

// Anagrams

// Letter Changes