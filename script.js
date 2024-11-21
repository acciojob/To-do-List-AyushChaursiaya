//your code here
const todoInput = document.getElementById('newTodoInput');
const todoAdd = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

todoAdd.addEventListener('click', () => {
    const todoText = todoInput.value.trim();

    if(todoText) {
        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;
        todoList.appendChild(todoItem);
    }
})
