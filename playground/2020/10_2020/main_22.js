

// FETCH API Section
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

//Get Local Text data
function getText(){
 fetch('test.txt')
 .then(function(res){
  return res.text();
 })
 .then(function(data){
   console.log(data);
   document.getElementById('output').innerHTML = data;
 })
 .catch(function(err){
   console.log(err);
 })
}

//Get Local JSON data
function getJSON(){
  fetch('posts.json')
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    let output = '';
    data.forEach((post=>{
      output += `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <hr>
      `
    }))
    document.getElementById('output').innerHTML = output;
  })
} 


//Get from External data
function getExternal(){
  fetch('https://api.github.com/users')
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    let output = '';
    data.forEach((post=>{
      output += `
          <h3>${post.login}</h3>
          <p>${post.id}</p>
          <hr>
      `
    }))
    document.getElementById('output').innerHTML = output;
  })
} 