const fs = require("fs");
const input = +fs
  .readFileSync("C:/Users/Happy/Desktop/리액트 스터디/문제풀이/input.txt")
  //   .readFileSync("dev/stdin")
  .toString();

let stars = "";
for (let i = 1; i <= input; i++) {
  let star = "";
  for (let j = input; j >= 1; j--) {
    star += j <= i ? "*" : " ";
  }
  stars += star + "\n";
}

console.log(stars);
