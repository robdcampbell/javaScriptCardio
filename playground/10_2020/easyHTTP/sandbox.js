

// Event listeners 
const taskInput = document.getElementById('task-input');
const taskBtn = document.getElementById('task-btn');


// Event Listeners

taskBtn.addEventListener('click', addTask);



// UI functions

function addTask(e){
    console.log(taskInput.value)
  e.preventDefault();
}