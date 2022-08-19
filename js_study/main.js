const addTask = document.querySelector('.add');
let todos = [];
const list = document.querySelector('.tasks');
function addTodo(text) {
    const todo = {
      id: Date.now(),
      text,
    };
    todos.push(todo)
}
function renderTodo() {
    let temp = '';
    todos.forEach(todo => {
      const html = `
          <li key="${todo.id}">
              <span>${todo.text}</span>
          </li>
          `;
      temp += html;
    });
    list.innerHTML = temp;
}
addTask.addEventListener('submit', e => {
    e.preventDefault();
    const text = addTask.add.value.trim();
    if (text !== '') {
        addTodo(text);
        addTask.reset();
        renderTodo();
    }
  });

