// 반복문 별찍기 -2
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

// 1
result = '';

for (let i = 0; i < num; i++){
  for (let j = 0; j < num - i - 1; j++){
    result += ' ';
  }

  for (let k = 0; k <= i; k++){
    result += '*';
  }
  result += '\n';
}

console.log(result);

// 2
for (let i = 1; i <= num; i++) {
  console.log(' '.repeat(num - i) + '*'.repeat(i));
}

// repeat 문자열 일정 횟수 반복 string.repeat( count )

// 4 1
// 3 2
// 2 3
// 1 4
// 0 5