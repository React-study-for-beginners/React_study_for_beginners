// 조건문 윤년 구하기
const fs = require('fs');

let input = fs.readFileSync("/dev/stdin").toString().trim();  // 백준 입력 받기
input = Number(input);  // 숫자형 변환

if (input % 4 == 0 && (input % 100 != 0 || input % 400 == 0)){
    console.log(1);
} else {
    console.log(0);
}
