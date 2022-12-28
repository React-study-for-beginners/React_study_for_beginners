function solution(money) {
  const americano = 5500;
  let count = 0;
  while (money - americano >= 0) {
    money -= americano;
    count++;
  }

  return [count, money];
}
