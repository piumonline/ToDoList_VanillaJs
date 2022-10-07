
//selectors
const input = document.querySelector('.todo-input');
const button = document.querySelector('.submit');
const list = document.querySelector('.todo-list');

//Event listeners
button.addEventListener('click', addTodo);

//Functions
function addTodo(event){
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText =input.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);  
    //cheack mark button 
    const completedButton = document.createElement('button'); 
    completedButton.innerText = "Done";
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //trash btn
    const trashdButton = document.createElement('button'); 
    trashdButton.innerText = "trash";
    trashdButton.classList.add('trash-btn');
    todoDiv.appendChild(trashdButton);
    //append to the list 
    list.append(todoDiv);
    //clear todo input value
    input.value="";
}