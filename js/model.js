const Model = {
  TODO: "todo-list",

  getData() {
    return JSON.parse(localStorage.getItem(this.TODO)) || [];
  },

  setData(data) {
    localStorage.setItem(this.TODO, JSON.stringify(data));
  },

  addRecord(record) {
    const data = this.getData();
    record.id = data.length + 1;
    data.push(record);
    this.setData(data);
  },

  removeAll() {
    this.setData([]);
  },
};
export default Model;
