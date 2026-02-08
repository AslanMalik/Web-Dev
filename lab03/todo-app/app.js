const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

const toggleDone = (todoItem, isDone) => {
    if (isDone) {
        todoItem.classList.add('done');
        return;
    }
    todoItem.classList.remove('done');
};

const deleteTodoItem = (list, todoItem) => {
    list.removeChild(todoItem);
};

const createTodoItem = (text) => {
    const todoItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const label = document.createElement('span');
    label.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';

    checkbox.addEventListener('change', () => {
        toggleDone(todoItem, checkbox.checked);
    });

    deleteButton.addEventListener('click', () => {
        deleteTodoItem(todoList, todoItem);
    });

    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);
    todoItem.appendChild(deleteButton);

    return todoItem;
};

const handleFormSubmit = (event) => {
    event.preventDefault();

    const text = todoInput.value.trim();
    if (text === '') {
        return;
    }

    const todoItem = createTodoItem(text);
    todoList.appendChild(todoItem);

    todoInput.value = '';
    todoInput.focus();
};

todoForm.addEventListener('submit', handleFormSubmit);