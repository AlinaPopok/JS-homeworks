import Model from "./model.js";
import View from "./view.js";

const Controller = {
  _todoForm: null,
  _removeAllBtn: null,

  init() {
    this.todoForm = "#todoForm";
    this.removeAllBtn = "[data-remove-all]";

    this.setEvents();
  },

  setEvents() {
    document.addEventListener("DOMContentLoaded", this.loadedHandler);
    this.todoForm.addEventListener("submit", this.handleSubmit);
    this.removeAllBtn.addEventListener("click", this.handleRemoveAll);
  },

  loadedHandler() {
    Model.getData().forEach((record) => {
      View.renderRecord(record);
    });
  },

  handleSubmit(event) {
    event.preventDefault();
    const record = {
      title: null,
      description: null,
    };
    const inputs = event.target.querySelectorAll("input, textarea");

    for (const input of inputs) {
      if (input.value.trim() === "") {
        throw new Error("empty string");
      } else {
        record[input.name] = input.value;
      }
    }
    Model.addRecord(record);
    View.renderRecord(record);
  },

  handleRemoveAll(event) {
    event.preventDefault();
    Model.removeAll();
    View.removeAll();
  },

  set removeAllBtn(selector) {
    this._removeAllBtn = document.querySelector(selector);
  },

  get removeAllBtn() {
    return this._removeAllBtn;
  },

  set todoForm(selector) {
    this._todoForm = document.querySelector(selector);
  },

  get todoForm() {
    return this._todoForm;
  },
};

export default Controller;
