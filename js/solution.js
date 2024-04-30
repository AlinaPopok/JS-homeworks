(function () {
  const ul = document.getElementById("ulId");
  const ulAtr = ul.attributes;
  const valueArr = [];
  const nameArr = [];
  for (const ulElem of ulAtr) {
    valueArr.push(ulElem.value);
    nameArr.push(ulElem.name);
  }
  console.log(valueArr);
  console.log(nameArr);
  ul.firstElementChild.setAttribute("data-my-name", "Alina");
  ul.lastElementChild.textContent = "Привіт, мене звати Аліна";
  ul.removeAttribute("data-dog-tail");
})();
