(function () {
  const formData = JSON.parse(localStorage.getItem("data"));
  const ul = document.querySelector("[data-ul]");

  for (const key of Object.keys(formData)) {
    const value = formData[key];
    const liValue = `${key}: ${value || "no data"}`;
    const li = document.createElement("li");
    li.innerHTML = liValue;
    ul.append(li);
  }
})();
