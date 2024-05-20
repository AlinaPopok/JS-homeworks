(function () {
  const form = document.querySelector("[data-form]");

  const formGetData = (e) => {
    e.preventDefault();
    const formData = {};
    const inputs = e.target.querySelectorAll("input");
    for (const input of inputs) {
      formData[input.name] = input.value;
    }
    const select = e.target.querySelector("select");
    formData[select.name] = select.value;
    const textArea = e.target.querySelector("textarea");
    formData[textArea.name] = textArea.value;
    localStorage.setItem("data", JSON.stringify(formData));
  };

  form.addEventListener("submit", formGetData);
})();
