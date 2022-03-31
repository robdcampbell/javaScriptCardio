// test
console.log("test");

const pokemonList = [
  "ditto",
  "mewtwo",
  "snorlax",
  "scyther",
  "drowsee",
  "hypno",
];

/////////////////////////////////////////////
// for...of loop

/*

pros: less room for error when settin up looping parameters 

cons: - Limited to singular, order-based looping (no reverse looping, intervals, etc.) 
    - Less customizable
*/
for (const pokemon of pokemonList) {
  console.log(`i caught a ${pokemon}`);
}
