import Model from "./Model.js";
const PageView = {
  _photoAlbum: null,

  init() {
    this._photoAlbum = document.querySelector("[data-photo-album]");
  },

  renderPhoto(item) {
    const wrapper = document.createElement("div");
    wrapper.className = "col";
    wrapper.innerHTML = `
       <img src="${item.thumbnailUrl}" alt="#${item.title}">`;
    this._photoAlbum.append(wrapper);
  },
};
export default PageView;
