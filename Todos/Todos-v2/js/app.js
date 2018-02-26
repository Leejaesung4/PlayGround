var todos;

var input_todo = document.getElementById('input-todo');
var todo_list = document.getElementById('todo-list');

//html 삽입.
var render = function() {
  var newContent = '';
  todos.sort().forEach(function(todo) {

    var checked = todo.completed ? 'checked' : '';

    newContent += '<li class = "list-group-item">';
    newContent += '<div class="hover-anchor">';
    newContent += '<a class="hover-action text-muted">';
    newContent += '<span class="glyphicon glyphicon-remove-circle pull-right" data-id="' + todo.id + '"></span>';
    newContent += '</a>';
    newContent += '<label class="i-checks" for="' + todo.id + '">';
    newContent += '<input type="checkbox" id="' + todo.id + '"' + checked + '><i></i>';
    newContent += '<span>' + todo.content + '</span>';
    newContent += '</label>';
    newContent += '</div>';
    newContent += '</li>';
  })
  todo_list.innerHTML = newContent;
};

//초반 3개
window.addEventListener('load', function() {
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
});

// 배열에 삽입
input_todo.addEventListener('keyup', function(e) {
  var add = input_todo.value;
  var max_id = todos.map(function(item) {
    return item.id; //todos의 아이디값으로만 새로운 배열을 만듬.
  });
  var maxx = Math.max.apply(null, max_id) // 새로운 배열안의 가장 큰값을 반환

  if (e.keyCode !== 13 && add.value !== '') return;

  todos = todos.concat({ id: maxx + 1, content: add, completed: false });
  input_todo.value = '';
  render();
});


// //배열안의 객체 삭제 
todo_list.addEventListener('click', function(e) {
  if (e.target.nodeName !== 'SPAN') return; //클릭한게  SPAN태그가아니면 아무짓안함

  todos = todos.filter(function(item) {
    return (e.target.dataset.id != item.id)
  });
  render();
});