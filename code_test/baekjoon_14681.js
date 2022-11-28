const input = require("fs").readFileSync(0).toString().split("\n");

let x = input[0];
let y = input[1];

console.log(x > 0 ? (y > 0 ? 1 : 4) : y < 0 ? 3 : 2);
