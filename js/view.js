const View = {
  _todoItems: null,

  init() {
    this.todoItems = "#todoItems";
  },

  renderRecord(record) {
    const wrapper = document.createElement("div");
    wrapper.className = "col-4";
    wrapper.innerHTML = `<div class="taskWrapper">
          <div class="taskHeading">#${record.id} | ${record.title}</div>
          <div class="taskDescription">${record.description}</div>
      </div>`;
    this.todoItems.append(wrapper);
  },

  removeAll() {
    this.todoItems.innerHTML = "";
  },

  set todoItems(selector) {
    this._todoItems = document.querySelector(selector);
  },

  get todoItems() {
    return this._todoItems;
  },
};

export default View;
