import axios from 'axios';

(function() {
  let todos;

  const inputTodo = document.getElementById('input-todo');
  const todoList = document.getElementById('todo-list');

  const render = function() {
    let html = '';

    todos.forEach(({ id, content, completed }) => {
      const checked = completed ? 'checked' : '';

      html += `<li class="list-group-item">
        <div class="hover-anchor">
          <a class="hover-action text-muted">
            <span class="glyphicon glyphicon-remove-circle pull-right" data-id="${id}"></span>
          </a>
          <label class="i-checks" for="${id}">
            <input type="checkbox" id="${id}"${checked}><i></i>
            <span>${content}</span>
          </label>
        </div>
      </li>`;
    });

    todoList.innerHTML = html;
  };

  const lastTodoId = function() {
    return todos ? Math.max.apply(null, todos.map(todo => todo.id)) + 1 : 1;
  };

  const getTodos = function() {
    axios.get('/todos')
      .then(res => {
        todos = res.data;
        render();
        console.log('[GET]\n', todos);
      })
      .catch(err => console.log(err.response));
  };

  const addTodo = function() {
    const content = inputTodo.value;
    inputTodo.value = '';

    let todo;

    if (!todos || todos.length == 0) {
      todo = { id: 1, content, completed: false };
    } else {
      todo = { id: lastTodoId(), content, completed: false };
      // todos = [{ id: lastTodoId(), content, completed: false }, ...todos];
    }

    axios.post('/todos', todo)
      .then(res => {
        console.log('[ADD]\n', res.data);
        getTodos();
      })
      .catch(err => console.log(err.response));
  };


  const removeTodo = function(id) {
    todos = todos.filter(todo => todo.id != id);

    axios.delete(`/todos/${id}`)
      .then(res => {
        console.log('[REMOVE]\n', res.data);
        getTodos();
      })
      .catch(err => console.log(err.response));
  };

  const toggleTodoComplete = function(id) {
    // todos = todos.map(todo => (todo.id == id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
    const todo = todos.find(todo => todo.id == id); // id가 일치하는 객체만 받아온다

    axios.patch(`/todos/${id}`, { completed: !todo.completed }) // 일치하는 객체의completed를 반전해서 보냄
      .then(res => {
        console.log('[TOGGLE-COMP]\n', res.data);
        getTodos();
      })
      .catch(err => console.log(err.response));
  };

  // load 이벤트는 모든 리소스(image, script, css 등)의 로드가 완료하면 발생한다.
  window.addEventListener('load', getTodos());

  inputTodo.addEventListener('keyup', function(e) {
    if (e.keyCode !== 13 || inputTodo.value === '') return;
    addTodo();
  });

  todoList.addEventListener('change', function(e) {
    toggleTodoComplete(e.target.id);
  });

  todoList.addEventListener('click', function(e) {
    const target = e.target;
    if (!target || target.nodeName !== 'SPAN' || target.parentNode.nodeName === 'LABEL') return;
    removeTodo(target.dataset.id);
  });
}());