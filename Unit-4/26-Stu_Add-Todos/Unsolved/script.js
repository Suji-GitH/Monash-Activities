var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  }
}

//Event listener for submit
todoForm.addEventListener("submit", function(Event) {
  event.preventDefault();
  //variable for user input which = to values in textbox
  var userInput = todoInput.value.trim();

  //if the user put is empty return nothing
  if (userInput === "") {
    return;
  }

  //add items to Array 
  todos.push(userInput);
  console.log(todos);
  todoInput.value = "";

//render list again
renderTodos();

});
