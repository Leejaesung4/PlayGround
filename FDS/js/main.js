// for (var i = 1; i <= 5; i++) {
//   var result = '';
//   // console.log('1번:' + result);
//   for (var m = 1; m <= i; m++) {
//     result += '#';
//     // console.log('2번:' + result);
//   }
//   for (var s = 1; s <= 10 - ((i * 2) - 1); s++) {
//     result += '*';
//     // console.log('3번:' + result);
//   }
//   console.log('4번:' + result);
// }

// function a(line) {
//   for (var i = 1; i <= 9; i++) {
//     var result = '';
//     if (i <= 5) {
//       for (var s = 1; s <= 10 - ((i * 2) - 1); s++) {
//         result += '*';
//       }
//       for (var m = 1; m <= (i * 4) - 3; m++) {
//         result += ' ';
//       }
//       for (var s = 1; s <= 10 - ((i * 2) - 1); s++) {
//         result += '*';
//       }
//     } else {
//       for (var s = 1; s <= (i * 2) - 9; s++) {
//         result += '*';
//       }
//       for (var m = 1; m <= 37 - (i * 4); m++) {
//         result += ' ';
//       }
//       for (var s = 1; s <= (i * 2) - 9; s++) {
//         result += '*';
//       }
//     }
//     console.log(result);
//   }
// };
function a(line) {
  for (var i = 1; i <= line; i++) {
    var result = '';
    if (i <= line / 2)
      for (var s = 1; s <= line * 2 - ((i * 2) - 1); s++) {
        result += '*';
      }
    for (var m = 1; m <= (i * 4) - 3; m++) {
      result += ' ';
    }
    for (var s = 1; s <= 10 - ((i * 2) - 1); s++) {
      result += '*';
    }
  } else {
    for (var s = 1; s <= (i * 2) - 9; s++) {
      result += '*';
    }
    for (var m = 1; m <= 37 - (i * 4); m++) {
      result += ' ';
    }
    for (var s = 1; s <= (i * 2) - 9; s++) {
      result += '*';
    }
  }
  console.log(result);
};

a(20);