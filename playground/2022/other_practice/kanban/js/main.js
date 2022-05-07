import KanbanAPI from "./api/kanbanAPI.js";

// TESTS
// get from LS
// console.log(KanbanAPI.getItems(1));

// Insert one to LS
// console.log(KanbanAPI.insertItem(1, "Another new one"));

KanbanAPI.updateItem(780334, {
  columnId: 3,
  position: 1,
  content: "I've changed...",
});
