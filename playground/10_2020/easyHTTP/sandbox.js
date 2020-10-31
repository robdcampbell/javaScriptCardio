
// UI Selectors
const taskBtn = document.getElementById('task-btn');


// Event Listeners
taskBtn.addEventListener('click', addTask);



// UI functions

function addTask(e){
  const taskInput = document.getElementById('task-input').value;
  let output = '';
  if(taskInput === ''){
    const alertMessage = document.createElement('h3');
    alertMessage.style.color = 'red';
    alertMessage.textContent = 'Please add a task first.';
    document.getElementById('output').appendChild(alertMessage);
    setTimeout(()=>document.getElementById('output').innerHTML='',3000);
  }else {

  }
  e.preventDefault();
}