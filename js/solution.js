(function () {
  const liArr = document.querySelectorAll("li");
  const textArr = [];
  let allElements = 0;
  for (const liArrElement of liArr) {
    console.log(liArrElement);
    textArr.push(liArrElement.textContent);
    allElements++;
  }
  console.log(textArr);
  console.log(`${allElements} - загальнa кількість елементів`);
})();
