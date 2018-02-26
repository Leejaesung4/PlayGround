let todos = [
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
]

function foo(id) {
  todos = todos.map(todo => (todo.id == id ? Object.assign(todo, { completed: !todo.completed }) : todo));
}

foo(3);

console.log(todos);

// function id(id) {
//   todos = todos.map(todo => todo.id);
// }

// id()
// console.log(todos);


// function max(id) {
//   todos = Math.max(...todos);
// }

// max()
// console.log(todos);

function todosAdd() {
  return todos = [{ id: 4, content: 'Test', completed: false }, ...todos];
}

todosAdd()
console.log(todos);


function removeTodos(id) {
  return todos = todos.filter(todo => todo.id !== id);
}

removeTodos(3)
console.log(todos);