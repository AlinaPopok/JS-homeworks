const Model = {
  getAlbums() {
    return fetch("https://jsonplaceholder.typicode.com/albums").then((res) =>
      res.json(),
    );
  },
  getPhotos(albumId) {
    return fetch(
      "https://jsonplaceholder.typicode.com/photos?albumId=" + albumId,
    ).then((res) => res.json());
  },
};

export default Model;
