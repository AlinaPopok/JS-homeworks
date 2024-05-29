(function () {
  const list = document.querySelector("[data-list]");
  list.addEventListener("click", (e) => {
    const el = e.target;
    if (el.hasAttribute("data-btn-add")) {
      addToFav(el);
    } else if (el.hasAttribute("data-btn-remove")) {
      changeBtnToAdd(el);
      removeFromFav(el);
    }
  });

  const changeBtnToRemove = (el) => {
    el.classList.remove("list__item-btn--add");
    el.classList.add("list__item-btn--remove");
    el.removeAttribute("data-btn-add");
    el.setAttribute("data-btn-remove", "");
    el.innerText = "Удалить из избранного";
  };

  const changeBtnToAdd = (el) => {
    el.classList.remove("list__item-btn--remove");
    el.classList.add("list__item-btn--add");
    el.innerText = "Добавить в избранное";
    el.removeAttribute("data-btn-remove");
    el.setAttribute("data-btn-add", "");
  };

  const addToFav = (el) => {
    changeBtnToRemove(el);
    const title = el.parentElement
      .querySelector("[data-item-title]")
      .getAttribute("data-item-title");
    const favItem = {
      title,
    };
    const data = getData();
    data.push(favItem);
    saveData(data);
  };

  const getData = () => JSON.parse(localStorage.getItem("data")) || [];

  const saveData = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
  };

  const removeFromFav = (el) => {
    const clearedItems = getData().filter(
      (item) =>
        item.title !==
        el.parentElement
          .querySelector("[data-item-title]")
          .getAttribute("data-item-title"),
    );
    saveData(clearedItems);
  };

  const init = () => {
    const listItems = document.querySelectorAll("[data-list-item]");
    const curData = getData();
    for (const listItem of listItems) {
      const titleEl = listItem.querySelector("[data-item-title]");
      const title = titleEl.getAttribute("data-item-title");
      if (curData.find((item) => item.title === title)) {
        const btnEl = listItem.querySelector("[data-btn-add]");
        changeBtnToRemove(btnEl);
      }
    }
  };

  init();
})();
