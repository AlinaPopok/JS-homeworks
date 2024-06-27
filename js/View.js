const View = {
  postContainer: null,
  commentContainer: null,
  init() {
    this.postContainer = document.querySelector("[data-post]");
    this.commentContainer = document.querySelector("[data-comments]");
  },

  renderPost(post) {
    this.commentContainer.innerHTML = "";
    this.postContainer.innerHTML = "";
    const postElement = document.createElement("div");
    postElement.classList.add("post-body");
    postElement.innerHTML = `
  <h2 class="post-title"> #${post.id} | ${post.title}</h2>
  <p class="post-text">${post.body}</p>
  <button class="post-btn" type="button" data-comment-btn>Get Comments</button>
  <div class="post-comments" data-comments></div>`;
    this.postContainer.append(postElement);
  },

  renderComments(comments) {
    comments.forEach((comment) => {
      const commentElement = document.createElement("div");
      commentElement.classList.add("comment-body");
      commentElement.innerHTML = `
  <h3 class="comment-name">${comment.name}</h3>
  <p class="user-email">User Email:
  <span>${comment.email}</span>
</p>
  <p class="comment-text">${comment.body}</p>`;
      this.commentContainer.append(commentElement);
    });
  },
};
export default View;
