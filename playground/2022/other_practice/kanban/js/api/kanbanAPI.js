// local storage component

export default class KanbanAPI {
  static getItems(columnId) {
    const column = read().find((column) => column.id === columnId);
    if (!column) {
      return [];
    }
    return column.items;
  }
  static insertItem(columnId, content) {
    const data = read();
    const column = data.find((column) => column.id === columnId);
    const item = {
      id: Math.floor(Math.random() * 1000000),
      content,
    };
    if (!column) {
      throw new Error("Column does not exist.");
    }
    column.items.push(item);
    save(data);

    return item;
  }
  static updateItem(itemId, newProps) {
    const data = read();
  }
}

// Read from LOCAL STORAGE
function read() {
  const json = localStorage.getItem("kanban-data");

  if (!json) {
    // Default Data if nothing saved in LocalStorage
    return [
      {
        id: 1,
        items: [],
      },
      {
        id: 2,
        items: [],
      },
      {
        id: 3,
        items: [],
      },
    ];
  }
  return JSON.parse(json);
}

// SAVE TO LOCAL STORAGE.
function save(data) {
  localStorage.setItem("kanban-data", JSON.stringify(data));
}

//
