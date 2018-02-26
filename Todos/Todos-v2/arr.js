// var a = ['a', 'b', 'c'];
// var b = ['x', 'y', 'z'];

// var c = a.concat(b);

// console.log(c);

// var d = a.concat('String');
// console.log(d);


// var e = a.concat(b, "lee");
// console.log(e);

// console.log(a);

// concat는 원본배열이 변하지 않는다.




// join()..기본은 ,로 구분되서 나옴.[배열 요소 전체를 연결하여 생성한 문자열을 반환]

// var arr = ['a', 'b', 'c', 'd'];

// var x = arr.join();
// console.log(x);

// var y = arr.join('');
// console.log(y);

// var z = arr.join(':');
// console.log(z);




// pop() 배열의 마지막요소의 제거. 제거한 요소를반환


// var a = ['a', 'b', 'c'];
// var c = a.pop();
// console.log(a);
// console.log(c);




// push(item)  인자로 전달된 항목을 배열의 맨끝에 추가
//               concat메소드와는 다르게 배열자체를 변경하여 인수전체의 배열에 추가  

// var a = ['a', 'b', 'c'];
// var b = ['x', 'y', 'z'];

// var c = a.push(b);
// console.log(a);
// console.log(c);

// console.log([1, 2].concat([3, 4]));
// concat은 원본배열을 안건드림.  push는 원본을 건드림





// reverse()    요소의 순서를 반대로 결정함. [원본도 변경됨]
// var a = ['a', 'b', 'c'];
// var b = a.reverse();
// console.log(a);
// console.log(b);



// shift()  배열의 맨앞의 요소를 제거후 반환[원본변함]
// var a = ['a', 'b', 'c'];
// var c = a.shift();
// console.log(a);
// console.log(c);

// pop는 마지막제거  shift는 맨앞제거




// silce(start,end)  배열의 특정부분복사
// 스타트의 인덱스요소부터 엔드의 인덱스전까지 복사[엔드인덱스-1]
// 음수의 경우 예를들어 slice(-2)라면 배열의 마지막2개 반환
// var item = ['a', 'b', 'c'];

// var res1 = item.slice(0, 1);
// console.log(res1);


// var res2 = item.slice(1, 2); // b
// console.log(res2);


// var res3 = item.slice(1); // b,c
// console.log(res3);


// var res4 = item.slice(-2); // b,c
// console.log(res4);

// console.log(item); //원본은 안변한다.





// slice아님  splice(start,deleteCount,item)
// 일반적으로 배열의 요소를 삭제할떄 사용

// var items = ['one', 'four'];

// // var res = items.splice(1, 2);
// // console.log(items); //원본이 변경됨..
// // console.log(res);

// // var res = items.splice(1, 2, 'x', 'y'); //items[1]부터 2개를제거하고 그자리에 껴넣음
// // console.log(items); //원본이 변경됨..
// // console.log(res); //제거한 요소의 반환

// Array.prototype.splice.apply(items, [1, 0].concat(['two', 'three']));
// console.log(items);


// sort()   배열의 정렬




// forEach()포이치문  for과 같다고보면된다.
// 포이치문을 사용한 배열을 순회함
// 그 배열을 순회하며 배열의 각 요소에 대하여 인자로 주어진 콜백함수를 실행
// 인자의 순서는 배열요소의 값,  요소의 인덱스, 순회할 배열이다.

// var total = 0;
// var testArray = [1, 3, 5, 7, 9];
// var testArray1 = [2, 4, 6, 8, 10];
// var total = testArray.forEach(function(item, index, array) {
//   console.log('[' + index + ']) = ' + item);
//   total += item;
// });

// console.log(total);
// console.log(testArray);

// testArray = [1, 2, 3, 4];

// testArray.forEach(function(item, index, array) {
//   console.log('[' + index + ']) = ' + item);
//   array[index] = Math.pow(item, 2);
//   console.log(testArray);
// });







// map()  배열순회하며 각 요소로 주어진 콜백함수의 결과값으로 새로운 배열을 생성한후 반환.
//        원본 안변함. 맵핑


// var numbers = [1, 4, 9];

// var roots = numbers.map(function(item) {
//   return Math.sqrt(item);
// })

// console.log(roots);
// console.log(numbers);

// roots = numbers.map(function(item) {
//   return item + item; //return 필수 [리턴을 안하면 새로운 배열에 반영안됨.]
// })
// console.log(roots);

// 생성자함수 대문자
// function Fix(name) {
//   this.name = name;
// }

// Fix.prototype.fixArray = function(arr) {
//   return arr.map(function(x) {
//     console.log(this.name);
//     return this.name + x;
//   }, this);
// };

// var pre = new Fix('인선');
// console.log(pre);
// var preArr = pre.fixArray(['재성', '럽럽']);

// console.log(preArr);


//맵과 포이치 필터도 두번쨰 인자로 this전달 가능








//filter()  배열 순회 각 요소 인자로 주어진 콜백함수의 실행결과가
// true인 배열만 추출하여 반환함.
// 특정 케이서만 필터링조건으로 걸어 추출하고 추출한 값을 배열로 만듬

var result = [1, 2, 3, 4, 5]
var res = result.filter(function(item, index, array) {
  console.log('[' + index + '] = ' + item);
  return item % 2; //1은 true로 0은 false 평가된다는걸 기억하자.[홀수필터링 조건]
});

console.log(res);