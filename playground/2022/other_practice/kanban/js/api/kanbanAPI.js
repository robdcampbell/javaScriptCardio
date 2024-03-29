// Kanban APi
// Local Storage functions

export default class KanbanAPI {
  static getItems(columnId) {
    const column = read().find((column) => column.id === columnId);
    if (!column) {
      return [];
    }
    return column.items;
  }
  // Insert / Add new item
  static insertItem(columnId, content) {
    const data = read();
    const column = data.find((column) => column.id === columnId);
    const item = {
      // generate server side UUID when full-stack
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
  // Update an existing item
  static updateItem(itemId, newProps) {
    const data = read();
    // Lambda / arrow IFFE, that is destructured
    const [item, currentColumn] = (() => {
      for (const column of data) {
        const item = column.items.find((item) => item.id === itemId);
        if (item) {
          // destructured values
          return [item, column];
        }
      }
    })();

    if (!item) {
      throw new Error("Item not found.");
    }

    item.content =
      newProps.content === undefined ? item.content : newProps.content;

    //update column and position
    if (newProps.columnId !== undefined && newProps.position !== undefined) {
      const targetColumn = data.find(
        (column) => column.id === newProps.columnId
      );
      if (!targetColumn) {
        throw new Error("Target column not found.");
      }
      // Delete the item from it's current column
      currentColumn.items.splice(currentColumn.items.indexOf(item), 1);
      // Move item into it's new column and position
      targetColumn.items.splice(newProps.position, 0, item);
    }

    save(data);

    // console.log(item, currentColumn);
  }
  static deleteItem(itemId) {
    const data = read();

    for (const column of data) {
      const item = column.items.find((item) => item.id === itemId);
      if (item) {
        column.items.splice(column.items.indexOf(item), 1);
      }
    }
    save(data);
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
