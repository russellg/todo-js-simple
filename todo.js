document.getElementById("todoForm").addEventListener("submit", saveTodo);

function saveTodo(e) {
  let todoItem = document.getElementById("todoItem").value;

  let todo = {
    todo: todoItem
  };

  if (localStorage.getItem("todos") === null) {
    // Init array
    let todos = [];
    // Add to array
    todos.push(todo);
    // Set to localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  } else {
    // Get todos from localStorage
    let todos = JSON.parse(localStorage.getItem("todos"));
    // Add bookmark to array
    todos.push(todo);
    // Re-set back to localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  document.getElementById("todoForm").reset();

  fetchTodo();

  e.preventDefault();
}

function fetchTodo() {
  // Get todo items from localStorage
  let todos = JSON.parse(localStorage.getItem("todos"));

  // Get output id
  let todoList = document.getElementById("todoList");

  // Build output
  todoList.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i].todo;
    todoList.innerHTML +=
      "<p>" +
      "<label>" +
      "<input type='checkbox' />" +
      "<span id='main'>" +
      todo +
      "</span>" +
      "</label>" +
      "</p>";
  }
}

function deleteTodo() {
  result = window.confirm("Clicking OK will permanently delete your todo list");
  if (result == true) {
    localStorage.removeItem("todos");
    fetchTodo();
  } else {
    fetchTodo();
  }
}
