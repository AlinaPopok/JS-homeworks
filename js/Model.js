const Model = {
  getPost(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .catch((err) => {
        throw new Error("Failed to fetch post");
      });
  },
  getComments(postId) {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    )
      .then((res) => res.json())
      .catch((err) => {
        throw new Error("Failed to fetch comments");
      });
  },
};

export default Model;
