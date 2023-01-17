function solution(s) {
  const stack = [];
  const arr = s.split(" ").forEach((e) => {
    if (e === "Z") stack.pop();
    else {
      stack.push(+e);
    }
  });
  return stack.length !== 0 ? stack.reduce((acc, cur) => acc + cur, 0) : 0;
}
