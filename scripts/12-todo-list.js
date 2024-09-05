const todoList = [
  {
    name: "make dinner",
    dueDate: "2024-08-22",
  },
  {
    name: "wash dishes",
    dueDate: "2024-08-22",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject; //shortcut
    const html = `
    <div>${name}</div> 
    <div>${dueDate}</div>
    <button  class="delete-todo-button js-delete-todo-button">Delete</button>
    `; //Generating HTLM
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector(".js-todo-button").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate,
  });

  inputElement.value = "";

  renderTodoList();
}
