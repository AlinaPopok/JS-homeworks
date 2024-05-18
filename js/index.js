(function () {
  const categories = document.querySelector("[data-cat]");
  const productListItems = document.querySelector("[data-category-list-items]");
  const productList = document.querySelectorAll("[data-category-list]");
  const productDetails = document.querySelectorAll("[data-product-chosen]");
  const showElement = (elem) => {
    elem.classList.remove("hidden");
  };
  const hideElement = (elem) => {
    elem.classList.add("hidden");
  };

  categories.addEventListener("click", (e) => {
    const currentCat = e.target;
    const currentCatValue = currentCat.getAttribute("data-cat-item");
    for (const productListElement of productList) {
      const currentProductList =
        productListElement.getAttribute("data-category-list");
      if (currentProductList === currentCatValue) {
        showElement(productListElement);
      } else {
        hideElement(productListElement);
      }
    }
  });
  productListItems.addEventListener("click", (e) => {
    const currenProduct = e.target;
    const currentProductValue = currenProduct.getAttribute("data-product");

    for (const productDetailElement of productDetails) {
      const chosenProduct = productDetailElement.getAttribute(
        "data-product-chosen",
      );
      if (currentProductValue === chosenProduct) {
        showElement(productDetailElement);
      } else {
        hideElement(productDetailElement);
      }
    }
  });
  const allProducts = document.querySelector("[data-products-all]");
  const message = document.querySelector(".message");
  const btns = document.querySelectorAll("[data-product-buy]");

  allProducts.addEventListener("click", (e) => {
    for (const btn of btns) {
      if (btn === e.target) {
        showElement(message);
        setTimeout(hideElements, 3000, "data-product-chosen");
        setTimeout(hideElements, 3000, "data-category-list");
        setTimeout(hideElement, 3000, message);
      }
    }
  });

  const hideElements = (name) =>
    document.querySelectorAll(`[${name}]`).forEach((el) => hideElement(el));
})();
