const IndexView = {
  _galleryList: null,

  init() {
    this._galleryList = document.querySelector("[data-gallery-container]");
  },

  renderListItem(item) {
    const wrapper = document.createElement("div");
    wrapper.className = "col";
    wrapper.innerHTML = `<div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">#${item.id}</h5>
                <p class="card-text" style="min-height: 5rem">#${item.title}</p>
                <a href="page.html?albumId=${item.id}" class="btn btn-primary">Go somewhere</a>
              </div>
            </div> `;
    this._galleryList.append(wrapper);
  },
};

export default IndexView;
