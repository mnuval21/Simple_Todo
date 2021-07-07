//select my todo form
const todoForm = document.querySelector('#todo-form');

//seclet the input so I can grab the value
const todoInput = document.querySelector('#todo-input');

//select the todo ol - where I'm going to render todos
const todoItemsList = document.querySelector('#todo-items');

//select each todo item
const todoItem = document.querySelector('.item');


//const dataId = Date.now();

//store todos in this array
let todos = [];

//pull the value from the todo form
todoForm.addEventListener('submit', function(e){
  e.preventDefault();
  //console.log(todoInput.value);
  
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
  //console.log(todosArr);

  store = window.localStorage;
  store.setItem("todos", JSON.stringify(todos));
  getTodos = JSON.parse(store.getItem("todos"));
  

  //clear input form
  todoInput.value = '';
});

//listen for clicks on delete button and list item
todoItemsList.addEventListener('click', function(e){
  console.log(e);

  //delete todo
  if(e.target.tagName === "BUTTON"){
    e.target.parentElement.remove()
    todosArr.splice(ataId, 1);
    console.log(todosArr);
  } 
  //add a line through for completed todo
  else if (e.target.tagName === "LI"){
    e.target.classList.toggle('checked');
  }
});



  
