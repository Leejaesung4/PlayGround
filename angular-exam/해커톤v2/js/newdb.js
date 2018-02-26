(function(ax) {

  var $x = ax.create({
    baseURL: 'https://todolist-my.firebaseio.com/todos'
  });

  let todos;
  let status = 'all';

  const inputTodo = document.getElementById('input-todo');
  const todoList = document.getElementById('todo-list');

  //상태에 따른 필터링 함수
  const filterByStatus = function() {

    return todos.filter(({ completed }) => {
      switch (status) {
        case 'active':
          return !completed;
        case 'completed':
          return completed;
        default:
          return true;
      }
    });
  };

  /// 아래쪽 숫자 추가
  const countCompletedTodos = function() {
    return todos.filter(({ completed }) => completed).length;
  };
  const countLeftTodos = function() {
    return todos.filter(todo => !todo.completed).length;
  };


  /////렌더
  const render = function() {
    let html = '';

    const _todos = filterByStatus();

    _todos.forEach(({ id, content, completed }) => {
      const checked = completed ? ' checked' : '';

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
      </li >`;
    });

    todoList.innerHTML = html;


    document.getElementById('completedTodos').innerHTML = countCompletedTodos();
    document.getElementById('leftTodos').innerHTML = countLeftTodos();


    inputTodo.focus();
  };



  const getTodos = function() {
    $x.get('.json')
      .then((res) => {
        todos = res.data;
        render();
      })
      .catch(err => console.log(err.response));

    console.log('[GET]\n', todos);
  };

  const lastTodoId = function() {
    return todos ? Math.max(...todos.map(({ id }) => id)) + 1 : 1;
  };

  const addTodo = function() {
    const content = inputTodo.value;
    inputTodo.value = '';

    //   if (!todos || todos.length === 0) {
    //     todos = [{ id: 1, content, completed: false }];
    //   } else {
    //     todos = [{ id: lastTodoId(), content, completed: false }].concat(todos);
    //   }

    const id = todos.length ? lastTodoId() : 1;
    const todo = { id, content, completed: false };

    $x.put(`/${(todos.length)}.json`, todo)
      .then((res) => {
        todos.push(todo);
        render();
      })
      .catch(err => console.log(err.response));

    console.log('[GET]\n', todos);
  };



  const toggleTodoComplete = function(id) {
    todos = todos.map(todo => (
      todo.id === (+id) ? Object.assign({}, todo, { completed: !todo.completed }) : todo
    ));
    render();
    console.log('[TOGGLE-COMP]\n', todos);
  };


  ////////////////올체크
  const toggleTodoAllComplete = function(chkStatus) {
    // todos.forEach(todo => {
    //   todo.completed = chkStatus;
    // });
    todos = todos.map(({ id, content, completed }) => {
      return ({ id, content, completed: chkStatus });
    });
    render();
    console.log('[ALL_CHECKED]\n', todos);
  };

  const removeTodo = function(id) {
    todos = todos.filter(todo => todo.id !== (+id));
    render();
    console.log('[REMOVE]\n', todos);
  };

  ////////////완료된 목록 전부 삭제
  const removeCompletedTodo = function() {
    todos = todos.filter(({ completed }) => !completed);
    render();
    console.log('[ALL_REMOVE]\n', todos);
  };
  inputTodo.addEventListener('keyup', (e) => {
    if (e.keyCode !== 13 || inputTodo.value.trim() === '') {
      return;
    }
    addTodo();
  });

  window.addEventListener('load', () => {

    getTodos();
  });

  todoList.addEventListener('change', (e) => {
    toggleTodoComplete(e.target.id);
  });

  todoList.addEventListener('click', ({ target }) => {
    if (!target || target.nodeName !== 'SPAN' || target.parentNode.nodeName === 'LABEL') {
      return;
    }
    removeTodo(target.dataset.id);
  });

  ///////////////////////////////////////v3v3v3v3v3////////////////////////////////////////////////////////////
  // 상태에따른 todos filtering
  document.querySelector('.nav').addEventListener('click', (e) => {
    if (!e.target || e.target.nodeName !== 'A') return;

    //  1
    const lis = e.currentTarget.children;

    [...lis].forEach((el) => {
      el.classList.remove('active');
    });

    const targetLi = e.target.parentNode
    targetLi.classList.add('active');

    // 2 
    status = targetLi.id;
    render();
  });


  // All check
  document.getElementById('chk-allComplete').addEventListener('change', e => {
    toggleTodoAllComplete(e.target.checked);
  });

  // 체크된거 삭제
  document.getElementById('btn-removeCompletedTodos').addEventListener('click', removeCompletedTodo);



}(axios));