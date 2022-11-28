const input = require("fs").readFileSync(0).toString().split("\n");

const number = input[1].split(" ");

console.log(`${Math.min(...number)} ${Math.max(...number)}`);
