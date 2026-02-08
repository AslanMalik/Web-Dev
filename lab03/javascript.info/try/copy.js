const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const ul = document.getElementById("todo-list");


form.addEventListener("submit", function (event) {

    event.preventDefault(); /*для того чтобы не перезагружай страницу */

    const text = input.value.trim();


    if(text === "") {
        return;
    }


    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";

    checbox.addEventListener("change", function() {
        if(checkbox.checked) {
            li.classList.add("done");
        }
        else {
            li.classList.remove("done");
        }
    })

    deleteBtn.addEventListener("click", function () {
        ul.removeChild(li);
    })


    li.appendChild(checkbox);

    li.appendChild(span);


    li.appendChild(deleteBtn);


    ul.appendChild(li);

    input.value = "";

    input.focus();
})

