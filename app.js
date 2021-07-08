//select my todo form
const todoForm = document.querySelector('#todo-form');

//seclet the input so I can grab the value
const todoInput = document.querySelector('#todo-input');

//select the todo ol - where I'm going to render todos
const todoItemsList = document.querySelector('#todo-items');

//select each todo item
const todoItem = document.querySelector('.item');

//store todos in this array
let todos = [];



//pull the value from the todo form
todoForm.addEventListener('submit', function(e){
  e.preventDefault();
    
  //add new todo
  const newTodoLi = document.createElement('li');
  newTodoLi.innerText = todoInput.value;
    
  //add delete button
  const removeBtn = document.createElement('button');
  removeBtn.innerText = "X";

  //render todo item, and button to DOM
  newTodoLi.appendChild(removeBtn);
  todoItemsList.appendChild(newTodoLi);

  // push todos in the array
  todos.push(todoInput.value);
  console.log("todos array", todos);
  
  //store in local storage
  localStorage.setItem("todos", JSON.stringify(todos))

  //clear input form
  todoInput.value = '';
});

//listen for clicks on delete button and list item
todoItemsList.addEventListener('click', function(e){
  console.log("Clicked in todoItemsList", e);

  //delete todo
  if(e.target.tagName === "BUTTON"){
    e.target.parentElement.classList.add('removed')
    todos.push(e.target);
    todos.pop();
    e.target.parentElement.remove()
    console.log("todos array after delete button", todos)
    //store in local storage
    localStorage.setItem("todos", JSON.stringify(todos))
  } 

  //add a line through for completed todo
  else if (e.target.tagName === "LI"){
    e.target.classList.toggle('checked');
    todos.push(e.target);
    todos.pop();
    console.log("todos array after line through click", todos)
  }
});

JSON.parse(localStorage.getItem("todos"));