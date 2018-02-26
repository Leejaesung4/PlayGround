var i = 5;

function foo() {
  var i = 10;
  console.log(i);
  bar();
}

function bar() { // 선언된 시점에서의 scope를 갖는다!
  console.log(i);
}

foo(); // ?