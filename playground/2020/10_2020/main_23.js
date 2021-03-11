
// practice

document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJson);
document.getElementById('button3').addEventListener('click',getExternal);


function getText(){
  fetch('test.txt')
  .then((res)=>res.text())
  .then((data)=>document.getElementById('output').innerHTML = data);
}

function getJson(){
  let output = '';
  fetch('posts.json')
  .then((res)=>res.json())
  .then((data)=>{
    data.forEach((post)=>{
      console.log(`${post.title}`)
      output += `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <hr>
      `;
    })
    document.getElementById('output').innerHTML = output;
  });
}

function getExternal(){
  let output = '';
  fetch('posts.json')
  .then((res)=>res.json())
  .then((data)=>{
    document.getElementById('output').innerHTML = data;
  });
}