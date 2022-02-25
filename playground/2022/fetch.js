// NODE - FETCH ; When working in node.js runtime
// import fetch from "node-fetch";

// EXAMPLE -  https://www.npmjs.com/package/node-fetch#json
const response = await fetch("https://api.github.com/users/github");
const data = await response.json();
console.log(data);

/*
    Practicing with Raw *** node-fetch *** API queries

    - GET, POST, PATCH, PUT, DELETE    

    - URL example: https://jsonplaceholder.typicode.com/    todos, users, posts, comments, albums

*/

async function getData(url) {
  await fetch(url)
    .then((res) => res.json())
    .then();
}

console.log(getData("https://jsonplaceholder.typicode.com/users"));
// const fetchData = getData("https://jsonplaceholder.typicode.com/users/1");
// console.log(fetchData);

// const userRes = await fetch("./users.json");
// const userData = await userRes.json();

// console.log(userData);
