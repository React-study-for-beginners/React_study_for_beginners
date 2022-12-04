const fs = require("fs");
const input = +fs
  .readFileSync("C:/Users/Happy/Desktop/리액트 스터디/문제풀이/input.txt")
  //   .readFileSync("dev/stdin")
  .toString();

if (
  (input % 4 === 0 && input % 100 !== 0) ||
  (input % 4 === 0 && input % 400 === 0)
) {
  console.log(1);
} else {
  console.log(0);
}
