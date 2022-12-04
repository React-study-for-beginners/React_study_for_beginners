const fs = require("fs");
const [x, y] = fs
  .readFileSync("C:/Users/Happy/Desktop/리액트 스터디/문제풀이/input.txt")
  //   .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

if (x > 0) {
  console.log(y > 0 ? 1 : 4);
} else {
  console.log(y > 0 ? 2 : 3);
}
