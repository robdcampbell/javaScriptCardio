import Column from "./Column.js";

export default class Kanban {
  constructor(root) {
    this.root = root;

    Kanban.columns().forEach((column) => {
      // TODO: create an instance of a column class
      const columnView = new Column(column.id, column.title);
      this.root.appendChild(columnView.elements.root);
    });
  }

  static columns() {
    return [
      {
        id: 1,
        title: "begin:",
      },
      {
        id: 2,
        title: "in-progress:",
      },
      {
        id: 3,
        title: "completed:",
      },
    ];
  }
}
