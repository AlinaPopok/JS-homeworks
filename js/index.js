(function () {
  const arr = [1, 2, [1.1, 1.2, 1.3], 3];
  const generateList = (arr) => {
    const ul = document.createElement("ul");
    document.body.append(ul);
    arr.forEach((element) => {
      const li = document.createElement("li");
      if (Array.isArray(element)) {
        const innerUl = generateList(element);
        li.append(innerUl);
      } else {
        li.innerHTML = element;
      }
      ul.append(li);
    });
    return ul;
  };
  generateList(arr);
})();
