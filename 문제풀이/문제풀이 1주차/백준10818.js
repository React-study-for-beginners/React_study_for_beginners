const fs = require("fs");
const input = fs
  .readFileSync("C:/Users/Happy/Desktop/리액트 스터디/문제풀이/input.txt")
  //   .readFileSync("dev/stdin")
  .toString()
  .split("\n");

const testCaseN = input.shift();
const testCase = input[0].split(" ").map(Number);

const maxNum = Math.max(...testCase);
const minNum = Math.min(...testCase);
console.log(minNum, maxNum);
