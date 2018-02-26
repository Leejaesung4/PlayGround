// #1. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log("i : " + i);
  };
}

// #2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.

for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    var result = String(i);
    console.log('result  : ' + result + '    type : ' + typeof result);
  };
}

// #3. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

for (var i = 9; i >= 0; i--) {
  if (i % 2 === 1) {
    console.log(i);
  };
}

for (var i = 9; i >= 0; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  };
}

// #4. while문을 사용하여 0부터 10까지 정수 중에서 짝수만을 작은 수부터 출력하시오.

var i = 0;
while (i <= 10) {
  console.log(i);
  i += 2; //  i = i + 2;
}

// #5. while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

var i = 9;
while (i >= 0) {
  console.log(i);
  i -= 2 //   i = i - 2;
}

// #6. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.

var result = 0;
for (var i = 0; i < 10; i++) {
  result += i; //    result = result + i;
}
console.log(result);

// #7. 1부터 20까지의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.

var result = 0;
for (var i = 0; i <= 20; i++) {
  if ((i % 2 && i % 3) !== 0) {
    result += i;
  }
}
console.log(result);

// #8. 1부터 20까지의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.

var result = 0;
for (var i = 0; i <= 20; i++) {
  if ((i % 2 && i % 3) === 0) {
    result += i;
  }
}
console.log(result);

// #9. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

for (var i = 1; i <= 6; i++) {
  for (var d = 1; d <= 6; d++) {
    if (i + d === 6) {
      console.log('첫번째 주사위 = ' + i + '    ' + '두번째 주사위 = ' + d);
    }
  }
}

// #10. 삼각형출력하기

for (var i = 1; i <= 5; i++) {
  var star = '';
  for (var s = 1; s <= i; s++) {
    star += '*'; //  star = star + '*';
  }
  console.log(star);
}

//  #11. 트리 출력하기

for (var i = 1; i <= 3; i++) {
  var star = '';
  for (var s = 1; s <= i; s++) {
    star += '*'; //  star = star + '*';
  }
  console.log(star);
}
for (var i = 1; i <= 5; i++) {
  var star = '';
  for (var s = 1; s <= i; s++) {
    star += '*'; //  star = star + '*';
  }
  console.log(star);
}



//for - if 문으로 작업
for (var i = 1; i <= 8; i++) {
  if (i <= 3) {
    var star = '';
    for (var s = 1; s <= i; s++) {
      star += '*'; //  star = star + '*';
    }
    console.log(star);
  } else {
    for (var i = 4; i <= 8; i++) {
      var star = '';
      for (var s = 4; s <= i; s++) {
        star += '*'; //  star = star + '*';
      }
      console.log(star);
    }
  }
}

//  #12. 정삼각형 출력하기

for (var i = 1; i <= 5; i++) {
  var result = '';
  for (var m = i; m <= 5; m++) {
    result += ' ';
  }
  for (var s = 1; s <= i * 2 - 1; s++) {
    result += '*';
  }
  console.log(result);
}

//  #13. 역정삼각형 출력하기

for (var i = 1; i <= 5; i++) {
  var result = '';
  for (var m = 1; m <= i; m++) {
    result += '#';
  }
  for (var s = 9; s >= (i * 2) - 1; s--) {
    result += '*';
  }
  console.log(result);
}


for (var i = 1; i <= 5; i++) {
  var result = '';
  for (var m = 1; m <= i; m++) {
    result += '#';
  }
  for (var s = 1; s <= 10 - ((i * 2) - 1); s++) {
    result += '*';
  }
  console.log(result);
}