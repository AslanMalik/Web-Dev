const form = document.getElementById("todoForm");
const input = document.getElementById();
const ul = document.getElementById();

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = input.value.trim();

    if(text === "") return;


    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");

    const deleteDtn = document.createElement("button");

    checkbox.addEventListener("change", function () {
        if(checkbox.checked) {
            li.classList.add("done");
        }
        else {
            li.classList.remove("done");
        }
    })

    deteleDtn.addEventListener("click", function () {
        ul.removeChild(li);
    })

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteDtn);

    ul.appendChild(li);

    input.value = "";

    input.focus();
})