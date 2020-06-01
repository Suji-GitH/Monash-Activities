var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

//render function for Array Items
function render() {
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;

    for (var i = 0; i < todos.length; i++) {
        var arrayList = todos[i];

        //Create element for ul
        var li = document.createElement("li");
        li.innerHTML = arrayList;
        //Append to li
        todoList.appendChild(li);
      }


};

render();