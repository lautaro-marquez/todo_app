const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const btnAddTask = document.querySelector("#btnAddTask")

const agregarTarea = () => {
    
    if ( inputBox.value === '' ) {

        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "¡Debes escribir una tarea!",
        })

    } else {
        
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    guardarTarea();
}

btnAddTask.addEventListener("click", agregarTarea);

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        guardarTarea();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        guardarTarea();
    }
}, false);

function guardarTarea() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function mostrarTarea() {
    listContainer.innerHTML = localStorage.getItem("data");
}

mostrarTarea();