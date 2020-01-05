var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = JSON.parse(localStorage.getItem('todo_list')) || [];

function renderTodos() {

    listElement.innerHTML = '';

    for (todo of toDos) {
        var toDoElement = document.createElement('li');
        var textElement = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');

        var linkText = document.createTextNode('Excluir');

        var pos = toDos.indexOf(todo);

        linkElement.setAttribute('onclick','deleteToDo('+ pos +')');

        linkElement.appendChild(linkText);

        toDoElement.appendChild(textElement);
        listElement.appendChild(toDoElement);
        toDoElement.appendChild(linkElement);
    }
}

function addTodo() {
    var toDoText = inputElement.value;

    toDos.push(toDoText);
    inputElement.value = '';

    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteToDo(pos) {
    toDos.splice(pos,1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('todo_list',JSON.stringify(toDos));
}

renderTodos();