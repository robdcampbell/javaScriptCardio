const addNoteBtn = document.getElementById("addNoteBtn");
const noteInput = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");

addNoteBtn.addEventListener("click", addNote);

function addNote(e) {
  e.preventDefault();

  console.log(noteInput.value);
}
