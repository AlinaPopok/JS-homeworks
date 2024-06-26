import Model from "./Model.js";
import IndexView from "./IndexView.js";

const IndexController = {
  init() {
    this.setEvents();
  },

  setEvents() {
    document.addEventListener("DOMContentLoaded", this.handleOnLoad);
  },

  handleOnLoad() {
    Model.getAlbums().then((albums) => {
      albums.forEach((item) => {
        IndexView.renderListItem(item);
      });
    });
  },
};

export default IndexController;
