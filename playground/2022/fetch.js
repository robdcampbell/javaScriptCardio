// NODE - FETCH
import fetch from "node-fetch";
/*
    Practicing with Raw *** node-fetch *** API queries

    - GET, POST, PATCH, PUT, DELETE    

    - URL example: https://jsonplaceholder.typicode.com/    todos, users, posts, comments, albums

*/

async function getData(url) {
  const res = await fetch(url);
  return await res.json();
}

const fetchData = getData("https://jsonplaceholder.typicode.com/users/1");

console.log(fetchData);

const response = await fetch("https://api.github.com/users/github");
const data = await response.json();

// console.log(data);
