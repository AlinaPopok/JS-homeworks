import Model from "./Model.js";
import PageView from "./PageView.js";

const PageController = {
  _albumId: null,

  init() {
    const urlParams = new URLSearchParams(window.location.search);
    this.albumId = urlParams.get("albumId");
    this.handleOnLoad = this.handleOnLoad.bind(this);

    this.setEvents();
  },

  setEvents() {
    document.addEventListener("DOMContentLoaded", this.handleOnLoad);
  },

  handleOnLoad() {
    Model.getPhotos(this.albumId).then((albums) => {
      albums.forEach((item) => PageView.renderPhoto(item));
    });
  },

  get albumId() {
    return this._albumId;
  },

  set albumId(value) {
    this._albumId = value;
  },
};
export default PageController;
