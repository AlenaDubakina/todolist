let btn = document.querySelector('.btn-add'),
  addTodos = document.querySelector('.list-add'),
  todoHtml = document.querySelector('.todo');

function addTodo() {
  let todo = document.createElement('div'),
    iconCheck = document.createElement('i'),
    iconTrash = document.createElement('i'),
    divIcon = document.createElement('div');

  todo.classList.add('todo-container');
  iconCheck.classList.add('fa-solid', 'fa-square-check');
  iconTrash.classList.add('fa-solid', 'fa-trash');

  iconCheck.addEventListener('click', () => {
    iconCheck.style.color = 'green';
    todo.style.backgroundColor = 'lightgray';
  });

  iconTrash.addEventListener('click', () => {
    todo.remove();
  });
  todo.textContent = addTodos.value;

  divIcon.appendChild(iconCheck);
  divIcon.appendChild(iconTrash);
  todo.appendChild(divIcon);
  todoHtml.appendChild(todo);

  addTodos.value = '';
}

btn.addEventListener('click', addTodo);
