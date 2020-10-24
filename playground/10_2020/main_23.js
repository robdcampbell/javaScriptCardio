
// practice

document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJson);


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
    console.log(data)
    output = data;
  });
  document.getElementById('output').innerHTML = output;
}