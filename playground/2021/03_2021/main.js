const addNoteBtn = document.getElementById("addNoteBtn");
const noteInput = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");
const deleteNoteBtn = document.querySelector(".deleteNoteBtn");

addNoteBtn.addEventListener("click", addNote);
notesList.addEventListener("click", deleteNote);

function addNote(e) {
  e.preventDefault();
  const newNote = document.createElement("li");
  const noteText = document.createElement("p");
  const noteDelete = document.createElement("button");

  newNote.className = "newNote";
  noteText.textContent = noteInput.value;
  noteDelete.textContent = "X";
  noteDelete.className = "deleteNoteBtn";

  newNote.appendChild(noteText);
  newNote.appendChild(noteDelete);
  notesList.appendChild(newNote);

  noteInput.value = "";
  console.log(noteInput.value);
}

function deleteNote(e) {
  // A little bit of event delegation:
  e.preventDefault();

  if (e.target.className === "deleteNoteBtn") {
    console.log("delete this note buddy!");
    s;
  }
}

// Link up local storage....
