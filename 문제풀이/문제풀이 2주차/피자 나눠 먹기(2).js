//방법1
function solution(n) {
  let pizza = 6;

  while (true) {
    if (pizza % n === 0) {
      break;
    }

    pizza += 6;
  }

  return pizza / 6;
}

//방법2
function solution(n) {
  for (let i = 1; i <= 100; i++) {
    if ((n * i) % 6 === 0) {
      return (n * i) / 6;
    }
  }
}
