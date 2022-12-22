// 조건문 사분면 고르기 
const readline = require("readline");

const rl = readline.createInterface ( {
    input:process.stdin,
    output:process.stdout,
});

let input =[];
let count = 0;

rl.on("line", function(x) {
    count++;
    input.push(parseInt(x));
    if (count ==2) {
        rl.close();
    }
}).on("close", function() {     // 문제 입출력 가져옴
    let x = input[0];   // 입력 받는 변수 선언
    let y = input[1];

    if (x > 0 && y > 0){
        console.log(1);
    } else if (x < 0 && y > 0){
        console.log(2);
    } else if (x < 0 && y < 0){
        console.log(3);
    } else {
        console.log(4);
    };
});