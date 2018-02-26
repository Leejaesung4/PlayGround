(function() {
  let todos;
  let status = 'all';

  const inputTodo = document.getElementById('input-todo');
  const todoList = document.getElementById('todo-list');

  //체크상태에 따른 필터링함수
  const filterByStatus = function() {
    //체크상태만 볼것이므로 객체디스트럭쳐링으로 completed값만 받아온다.
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


  //숫자필터
  const countCompletedTodos = function() {
    return todos.filter(({ completed }) => completed).length;
  };
  const countLeftTodos = function() {
    return todos.filter(({ completed }) => !completed).length;
  };

  //렌더링 함수
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

    document.getElementById('completedTodos').innerHTML = countCompletedTodos();
    document.getElementById('leftTodos').innerHTML = countLeftTodos();
    // html추가
    todoList.innerHTML = html;
  };



  // 초기 Todos 리스트
  const getTodos = function() {
    todos = [
      { id: 3, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 1, content: 'JavaScript', completed: false }
    ];

    render();
    console.log('[GET]\n', todos);
  };



  ////// 새로입력한 todos의 id값 추가함수  //////////
  const lastTodoId = function() {
    // todos가 있으면 현재 있는 id최고 값+1
    // todos가 없다면 id값으로 1을 반환
    // 디스럭쳐링 사용 id만 인자로 넘김  //  ES6 사용
    return todos ? Math.max(...todos.map(({ id }) => id)) + 1 : 1;
  };


  /////// Todos 리스트 Add 추가 ////////////
  const addTodo = function() {
    //input 값을 받아와야함
    const content = inputTodo.value;
    //엔터키 입력시 값을 받아오고 값의 초기화
    inputTodo.value = '';
    // todos배열이 비어있을 경우 
    if (!todos || todos.length === 0) {
      todos = [{ id: 1, content, completed: false }];
    } else {
      todos = [{ id: lastTodoId(), content, completed: false }].concat(todos);
    }

    render();
    console.log('[ADD]\n', todos);
  };


  /////////////클릭해서삭제/////////////
  const removeTodo = id => {
    todos = todos.filter(todo => todo.id != id);
    render();
    console.log('[REMOVE]\n', todos);
  };
  ///클릭된거 삭제///
  const removeCompletedTodo = function() {
    todos = todos.filter(({ completed }) => !completed);
    render();
    console.log('[ALL_REMOVE]\n', todos);
  };


  /////////////체크박스 체인지////////////
  const toggleTodoComplete = id => {
    // todos에서 각 객체의 id값과 전달받은 id값이같을 경우 completed의 값을 반전 시켜주고 
    //  값이 다를경우 그대로 todos에 넘겨준다.
    todos = todos.map(todo => todo.id == id ? Object.assign({}, todo, { completed: !todo.completed }) : todo);
    render();
    console.log('[TOGGLE-COMP]\n', todos);
  };
  ///////////ALL 체크 /////////
  const toggleTodoAllComplete = (chk) => {
    todos = todos.map(({ id, content, completed }) => {
      return { id, content, completed: chk };
    });
    render();
    console.log('[ALL_CHECKED]\n', todos);
  };


  //////////////////////////[[[[이벤트]]]]/////////////////////////////////

  window.addEventListener('load', getTodos);

  inputTodo.addEventListener('keyup', (e) => {
    // 소문자 대문자 씨발
    if (e.keyCode !== 13) return;
    addTodo();
  });

  todoList.addEventListener('click', ({ target }) => {
    if (!target || target.nodeName !== 'SPAN' || target.parentNode.nodeName === 'LABEL') return;
    removeTodo(target.dataset.id);
  });


  //체크된거 전체 삭제
  document.getElementById('btn-removeCompletedTodos').addEventListener('click', removeCompletedTodo);


  todoList.addEventListener('change', e => {
    toggleTodoComplete(e.target.id); //클릭한 타겟의 아이디값 넘김
  })

  // All체크
  document.getElementById('chk-allComplete').addEventListener('change', e => {
    toggleTodoAllComplete(e.target.checked);
  });

  /////////////체크에 따른상태변경/////////this를 쓰기때문에 화살표 함수안됨
  document.querySelector('.nav').addEventListener('click', function(e) {
    if (!e.target || e.target.nodeName !== 'A') return;

    // 모든 .nav > li 요소에서 active 클래스 제거
    [...this.childNodes].forEach(tab => {
      // Skip text node
      if (tab.nodeName === 'LI') {
        tab.classList.remove('active');
      }
    });
    // const lis = e.currentTarget.children;

    // [...lis].forEach((el) => {
    //   el.classList.remove('active');
    // });

    // 클릭된 a 요소의 부모 요소(.nav > li)에 active 클래스 추가
    const navItem = e.target.parentNode;
    navItem.classList.add('active');

    status = navItem.id;
    render();
  });
}());