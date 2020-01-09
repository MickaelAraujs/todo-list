"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TodoList =
/*#__PURE__*/
function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    this.list = JSON.parse(localStorage.getItem('todo_list')) || [];
  }

  _createClass(TodoList, [{
    key: "add",
    value: function add(todo) {
      this.list.push(todo);
      this.save();
      this.render();
    }
  }, {
    key: "delete",
    value: function _delete(pos) {
      this.list.splice(pos, 1);
      this.save();
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      document.querySelector('#app ul').innerHTML = '';
      this.list.forEach(function (element) {
        var li = document.createElement('li');
        var liText = document.createTextNode(element);
        li.appendChild(liText);
        var a = document.createElement('a');
        var aText = document.createTextNode('Excluir');
        a.appendChild(aText);
        a.setAttribute('href', '#');
        li.appendChild(a);

        a.onclick = function () {
          _this["delete"](_this.list.indexOf(element));
        };

        document.querySelector('#app ul').appendChild(li);
      });
    }
  }, {
    key: "save",
    value: function save() {
      localStorage.setItem('todo_list', JSON.stringify(this.list));
    }
  }]);

  return TodoList;
}();

var lista = new TodoList();
lista.render();

document.getElementById('btn').onclick = function () {
  var input = document.getElementById('todo');
  lista.add(input.value);
  input.value = '';
};
