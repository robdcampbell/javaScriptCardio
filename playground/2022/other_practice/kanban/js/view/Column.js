import KanbanAPI from "../api/kanbanAPI.js";

export default class Column {
  constructor(id, title) {
    this.elements = {};
    this.elements.root = Column.createRoot();
    this.elements.title = this.elements.root.querySelector(
      ".kanban__column-title"
    );
    this.elements.items = this.elements.root.querySelector(
      ".kanban__column-items"
    );
    this.elements.addItem =
      this.elements.root.querySelector(".kanban__add-item");
    this.elements.root.dataset.id = id;
    this.elements.title.textContent = title;

    this.elements.addItem.addEventListener("click", () => {
      // TODO : ADD ITEM;
    });

    KanbanAPI.getItems(id).forEach((item) => {
      //console.log(item);
      this.renderItem(item);
    });
  }
  static createRoot() {
    //
    // *** document.createRange(), range.selectNode(), range.createContextualFragment().children[0];
    //NOTES:  https://developer.mozilla.org/en-US/docs/Web/API/Range/createContextualFragment
    const range = document.createRange();

    range.selectNode(document.body);

    return range.createContextualFragment(`
            <div class="kanban__column">
                <div class="kanban__column-title"></div>
                <div class="kanban__column-items"></div>
                <button class="kanban__add-item" type="button">+ Add</button>
            </div>
        `).children[0];
  }
  renderItem(data) {}
}

// 55.50
