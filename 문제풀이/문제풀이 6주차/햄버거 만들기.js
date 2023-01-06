function solution(ingredient) {
  const stack = [];
  let count = 0;
  ingredient.forEach((e) => {
    stack.push(e);

    if (stack.length >= 4) {
      const hamburger = stack.slice(-4).join("");
      if (hamburger === "1231") {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();

        count++;
      }
    }
  });

  return count;
}
