
// const form = document.querySelector('form'),
//     btnAdd = form.querySelector('#add'),
//     btnRemove = form.querySelectorAll('.btn-remove'),
//     formInput = form.querySelector('.input__task');

   

//     btnAdd.addEventListener('click', (e) => {
//         e.preventDefault();
//         if(formInput.value.length === 0) {
//             alert("please enter a task");
//         } else {
//             addPost();
            
//         }
        
//         function addPost() {           
//             const element = document.createElement('label');
//             element.classList.add('item__oldTask');
//             element.innerHTML = `
//             <span class="text__oldTask">${formInput.value}</span>
//                         <button class="btn btn-remove" id="remove">Remove</button>
//             `
//             form.querySelector('.field__oldTask').appendChild(element);
            
//             formInput.value.clear();
//         }
//     })
//     btnRemove.forEach((btn) => {
//         btn.addEventListener('click', (event) => {
           
//             if(event.target.classList.contains('btn-remove')) {
                
//                 const listItem = event.target.parentNode;
//                 listItem.remove();
//             } else {
//                 event.preventDefault();
//             }
            
//         })

//     })
   

document.addEventListener('DOMContentLoaded', () => {

  


});

const form = document.querySelector('form'),
todoInput = form.querySelector('.todo__input'),
todoList = form.querySelector('.todo__list');

let todos = JSON.parse(localStorage.getItem('todos'));

function renderItem() {
    const todoItem = document.createElement('label');
    todoItem.classList.add('todo__item');
    todoItem.innerHTML = `
                        <span class="text">${todoInput.value}</span>
                        <button class="btn btn-edit" id="edit">Edit</button>
                        <button class="btn btn-remove" id="remove">Remove</button>
    `
    
}
function addTodo() {
    const todoText = todoInput.value.trim();

    if(todoText !== '') {
        todos.push(todoText);
        localStorage.setItem('todos', JSON.stringify(todos));
        renderItem();
        todoInput.value = '';
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
})

renderItem();