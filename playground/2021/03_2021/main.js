const addNoteBtn = document.getElementById("addNoteBtn");
const noteInput = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");
const deleteNoteBtn = document.querySelector(".deleteNoteBtn");

let notesFromStorage = localStorage.getItem("notes")
  ? localStorage.getItem("notes")
  : [];

document.onload = getNotes();

addNoteBtn.addEventListener("click", addNote);
notesList.addEventListener("click", deleteNote);

function getNotes() {
  console.log(notesFromStorage);
  notesFromStorage = JSON.parse(localStorage.getItem("notes"));
  console.log(notesFromStorage);
}

function addNote(e) {
  e.preventDefault();

  if (noteInput.value === "") {
    alert("Add a note please!");
  } else {
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

    localStorage.setItem("notes", JSON.stringify(noteInput.value));

    noteInput.value = "";
    console.log(noteInput.value);
  }
}

function deleteNote(e) {
  // A little bit of event delegation:
  e.preventDefault();

  if (e.target.className === "deleteNoteBtn") {
    console.log("delete this note buddy!");
    e.target.parentElement.remove();
  }
}

// Link up local storage....
