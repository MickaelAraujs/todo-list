class TodoList {
    constructor() {
        this.list = JSON.parse(localStorage.getItem('todo_list')) || [];
    }
    add(todo) {
        this.list.push(todo);

        this.save();
        this.render();
    }
    delete(pos) {
        this.list.splice(pos,1);

        this.save();
        this.render();
    }
    render() {
        document.querySelector('#app ul').innerHTML = '';

        this.list.forEach(element => {
            let li = document.createElement('li');
            let liText = document.createTextNode(element);
            li.appendChild(liText);
            let a = document.createElement('a');
            let aText = document.createTextNode('Excluir');
            a.appendChild(aText);
            a.setAttribute('href','#');
            li.appendChild(a);

            a.onclick = () => {
                this.delete(this.list.indexOf(element));
            }
            document.querySelector('#app ul').appendChild(li);
        })
    }
    save() {
        localStorage.setItem('todo_list',JSON.stringify(this.list));
    }
}

const lista = new TodoList();

lista.render();

document.getElementById('btn').onclick = function() {
    const input = document.getElementById('todo');
    lista.add(input.value);
    input.value = '';
}