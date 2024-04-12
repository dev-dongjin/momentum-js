const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');
let toDos = [];
const TO_DO_KEY = 'toDos';

function saveTodos() {
  localStorage.setItem(TO_DO_KEY, JSON.stringify(toDos));
}

function onTodoSubmit(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = '';
  const newTodoObj = {
    text: todo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  addTodoList(newTodoObj);
  saveTodos();
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

function addTodoList(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');
  button.innerText = 'X';
  button.addEventListener('click', deleteTodo);
  li.id = newTodo.id;
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  todoList.appendChild(li);
}

todoForm.addEventListener('submit', onTodoSubmit);

const savedToDos = localStorage.getItem(TO_DO_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(addTodoList);
}
