function solution(numbers) {
  const avg = numbers.reduce((acc, cur) => acc + cur, 0);
  return avg / numbers.length;
}
