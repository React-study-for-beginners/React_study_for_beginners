function solution(n) {
  let result = 0;
  let factorial = 1;
  while (factorial <= n) {
    result++;
    factorial *= result;
  }

  return result - 1;
}
