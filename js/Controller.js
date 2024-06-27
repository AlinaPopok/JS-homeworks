import Model from "./Model.js";
import View from "./View.js";

const Controller = {
  form: document.querySelector("[data-form]"),
  postContainer: document.querySelector("[data-post]"),
  postId: null,

  init() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCommentsOnClick = this.handleCommentsOnClick.bind(this);
    this.addSubmitEvent();
  },

  addSubmitEvent() {
    this.form.addEventListener("submit", this.handleSubmit);
  },

  handleSubmit(e) {
    e.preventDefault();
    if (this.form.input.value > 0 && this.form.input.value <= 100) {
      this.postId = this.form.input.value;
      Model.getPost(this.postId).then((post) => {
        View.renderPost(post);
        this.addOnClick();
      });
    } else {
      throw new Error("Please enter a valid number");
    }
  },
  addOnClick() {
    const btn = this.postContainer.querySelector("[data-comment-btn]");
    btn.addEventListener("click", this.handleCommentsOnClick);
  },

  handleCommentsOnClick(e) {
    e.preventDefault();
    Model.getComments(this.postId).then((comments) => {
      View.renderComments(comments);
    });
  },
};
export default Controller;
