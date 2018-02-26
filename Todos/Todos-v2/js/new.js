(function() {
  let todos;

  const input_todo = document.getElementById('input-todo');
  const todo_list = document.getElementById('todo-list');


  //초기화작업
  const get_todos = function() {
    todos = [{
        id: 3,
        content: 'HTML',
        completed: false
      },
      {
        id: 2,
        content: 'CSS',
        completed: true
      },
      {
        id: 1,
        content: 'Javascript',
        completed: false
      }
    ];
    render();
    console.log('[GET]\n', todos);
  }

  // 추가한 todos의 id값 생성
  const last_todos = function() {
    //todos의 모든 요소를 방문해서 //각 요소의 id값을 비교하고  //그 중 최대인 id값에 + 1 값을 숫자값을 반환함
    return todos ? Math.max.apply(null, todos.map(todo => todo.id)) + 1 : 1;
  };


  // 인풋에 입력한 값을 todos 배열에 추가
  const add_todos = function() {
    //입력된 값 받기
    const content = input_todo.value;
    //엔터가 쳐지면 인풋안의 글씨 초기화
    input_todo.value = '';
    //입력한 대이터가 todos맨처음 요소로 추가 
    //last_todos로 아이디값을 받아옴.  
    // content 이름과 들어온 값의 이름이 같음[es6는 한번만 써주면됨.]
    if (!todos || todos.length == 0) {
      todos = [{ id: 1, content, completed: false }];
    } else {
      todos = [{ id: last_todos(), content, completed: false }, ...todos];
    }; ///[{ id: last_todos(), content, completed: false }].concat(todos);  성능이슈로 인해 push,unshuft 말고 concat를 씀
    render();
    console.log('[ADD]\n', todos);
  };


  // 체크박스누를시 객체의 값 변경함수
  const toggle_complete = function(id) {
    todos = todos.map(todo => {
      return todo.id == id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
    });
    render();
    console.log('[TOGGLE-COMP]\n', todos);
  };



  // 클릭시 삭제 함수
  const remove_todos = function(id) {
    todos = todos.filter(todo => todo.id != id); //한줄작성가능해서 return과 {}빼버림.
    render();
    console.log('[REMOVE]\n', todos);
  };



  // 렌더함수 todos를 가지고 html을 브라우저에 뿌려주는 함수
  const render = function() {
    let html = '';

    todos.forEach(todo => {
      const checked = todo.completed ? 'checked' : '';

      html += `<li class="list-group-item">
            <div class="hover-anchor">
              <a class="hover-action text-muted">
                <span class="glyphicon glyphicon-remove-circle pull-right" data-id="${todo.id}"></span>
              </a>
              <label class="i-checks" for="${todo.id}">
                <input type="checkbox" id="${todo.id}" ${checked}><i></i>
                <span>${todo.content}</span>
              </label>
            </div>
          </li>`;
    });
    todo_list.innerHTML = html;
  };



  // 브라우저 시작시 바로 시작.
  window.addEventListener('load', function() {
    get_todos()
  });


  // 새로운 내용의 추가 [엔터키 이벤트등록]
  input_todo.addEventListener('keyup', function(e) {
    if (e.keyCode !== 13 || input_todo.value.trim() === '') return;
    add_todos()
  });

  //체크체크박스 
  todo_list.addEventListener('change', function(e) {
    toggle_complete(e.target.id);
  });


  //x모양 클릭시 삭제
  todo_list.addEventListener('click', function(e) {
    if (!e.target || e.target.nodeName !== 'SPAN' || e.target.parentNode.nodeName === 'LABAL') return;
    remove_todos(e.target.dataset.id);
  });

}());