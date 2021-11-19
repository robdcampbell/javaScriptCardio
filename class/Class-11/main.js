// Global Variables
const taskInput = document.querySelector(".new-task");
const taskList = document.querySelector(".task-list");
const addBtn = document.querySelector(".add-btn");

// Event Listeners
window.onload = getListItems();
addBtn.addEventListener("click", addTaskToList);
taskList.addEventListener("click", deleteTask);

// Get all list items
function getListItems() {
  let taskGroup = document.querySelectorAll(".task-item");
  // Convert nodeList to an Array
  taskGroup = Array.from(taskGroup);
  taskGroup.forEach((val) => {
    // ...
  });
}

// Add new task to list function
function addTaskToList(e) {
  e.preventDefault();
  createListItem(taskInput.value);
  taskInput.value = "";
}

// create new DOM element function
function createListItem(val) {
  const li = document.createElement("li");
  li.className = "task-item";
  li.innerHTML = `
    <p>${val}</p>
    <button class="delete-btn">X</button>
  `;
  taskList.appendChild(li);
}

// Delete task from group
function deleteTask(e) {
  e.preventDefault;
  if (e.target.className === "delete-btn") {
    const deletedTask = e.target.parentElement.children[0].textContent;
    // Log of deleted task.
    console.log(`Task: ${deletedTask}, was deleted!`);
    // Removing task list item
    e.target.parentElement.remove();
  }
}
