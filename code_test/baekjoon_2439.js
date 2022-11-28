const input = require("fs").readFileSync(0).toString();

let star = Array.from({ length: input }, () => " ");

for (let i = input; i--; ) {
  star[i] = "*";
  console.log(star.join(""));
}
