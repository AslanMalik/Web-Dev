const toDoForm = document.getElementById('todo-form');
const toDoInput = document.getElementById('todo-input');
const toDoList = document.getElementById('todo-list');


const Checked = (ItemLi, isDone) => {
    if(isDone) {
        ItemLi.classList.add('done');
        return;
    }
    ItemLi.classList.remove('done');

}


const DeleteItem= (list, item) => {
    list.removeChild(item);
}




const CreateItem = (text) => {
    const ItemLi = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';


    const itemSpan = document.createElement('span');
    itemSpan.textContent = text;


    const DeleteBtn = document.createElement('button');
    DeleteBtn.type = 'button';
    DeleteBtn.textContent = 'Delete';


    checkbox.addEventListener('change', () => {
        Checked(ItemLi, checkbox.checked);
    })


    DeleteBtn.addEventListener('click', () => {
        DeleteItem(toDoList, ItemLi);
    })



    ItemLi.appendChild(checkbox);
    ItemLi.appendChild(itemSpan);
    ItemLi.appendChild(DeleteBtn);

    return ItemLi;
}


const addItem = (event) => {
    event.preventDefault();

    const text = toDoInput.value.trim();


    if(text === '') {
        return;
    }


    const item = CreateItem(text);

    toDoList.appendChild(item);

    toDoInput.value = '';

    toDoInput.focus();


}



toDoForm.addEventListener('submit', addItem);






