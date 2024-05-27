(function () {
  const form = document.querySelector('#todoForm');
  const TODO = 'todo-list';
  const getData = () => JSON.parse(localStorage.getItem(TODO)) || [];
  const setData = (data) => {
    localStorage.setItem(TODO, JSON.stringify(data));
  };
  const renderTodo = () => {
    const todoItemContainer = document.querySelector('#todoItems');
    todoItemContainer.innerHTML = '';
    getData()
      .reverse()
      .forEach((item) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'col-4';
        wrapper.innerHTML = `<div class="taskWrapper">
          <div class="taskHeading">#${item.id} | ${item.title}</div>
          <div class="taskDescription">${item.description}</div>
      </div>`;
        todoItemContainer.append(wrapper);
      });
  };
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const record = {
      title: null,
      description: null,
    };
    const inputs = e.target.querySelectorAll('input, textarea');

    for (const input of inputs) {
      if (input.value.trim() === '') {
        throw new Error('empty string');
      } else {
        record[input.name] = input.value;
      }
    }
    const data = getData();
    const recordToSave = structuredClone(record);
    recordToSave.id = data.length + 1;

    data.push(recordToSave);
    setData(data);
    renderTodo();
    e.target.reset();
  });

  form.addEventListener('click', (e) => {
    const removeBtn = e.target;
    if (removeBtn.hasAttribute('data-remove-all')) {
      localStorage.removeItem('todo-list');
      const todoItemContainer = document.querySelector('#todoItems');
      todoItemContainer.innerHTML = '';
    }
  });
  renderTodo();
})();
