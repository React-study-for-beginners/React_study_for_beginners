// 배열 최소, 최대

const arr = [20, 10, 35, 30, 7]

const maxValue = Math.max(...arr);
const minValue = Math.min(...arr);

console.log(`${minValue} ${maxValue}`)  // 내가 입력한게 아닐 땐 어떡하지?


/// 이걸 맞다하네
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = input[1].split(' ');  // 공백구분
num.sort(function(a, b){
    return a - b;
})    // 오름차순 정렬

let max = num[0];   // 배열 첫번재 요소
let min = num[num.length - 1];  // 배열 마지막 요소

console.log(max, min);