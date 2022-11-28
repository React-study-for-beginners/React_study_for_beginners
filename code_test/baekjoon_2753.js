const input = require("fs").readFileSync(0).toString();

console.log(!(input % 4) && (input % 100 || !(input % 400)) ? 1 : 0);
