const addBtn = document.querySelector(".add__btn");
const noteInput = document.querySelector(".note__input");
let notesStorage;

// Event Listeners:
addBtn.addEventListener("click", addNote);

// ONLOAD:
document.onload = (function () {
  getItemsFromStorage();
  setNotesList();
})();

// ***  Get items from local storage
function getItemsFromStorage() {
  let items = localStorage.getItem("notes");
  if (!items) {
    console.log("None present!");
    return;
  }
  console.log(items);
}
// *** Set current notes from local storage
function setNotesList() {
  console.log("setting the notes list");
}

/*
  ========================================================
  ======================================================== 
*/

// ON ADD:
function addNote(e) {
  e.preventDefault();

  console.log(noteInput.value);
  noteInput.value = "";
}
// append to the DOM
// grab items from local stroage
// append to the local storage set updated list of notes

/*
  ========================================================
  ======================================================== 
  */
// ON DELETE:
// remove from the DOM
// Fetch items from localStorage
// delete from local storage set updated list of notes
