import KanbanAPI from "./api/kanbanAPI.js";
import Kanban from "./view/Kanban.js";
// console.log("test");

new Kanban(document.querySelector(".kanban"));

//////////////////////////
//////////////////////////
// KanbanAPI TESTS
// get from LS
// READ
// console.log(KanbanAPI.getItems(1));

// ADD
// Insert one to LS
// console.log(KanbanAPI.insertItem(3, "Study SSD"));

// UPDATE
// KanbanAPI.updateItem(690180, {
//   columnId: 2,
//   position: 0,
//   content: "About to be deleted...",
// });

// DELETE
// KanbanAPI.deleteItem(704945);
