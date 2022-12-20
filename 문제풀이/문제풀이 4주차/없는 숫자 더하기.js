//예전에 푼 방법
function solution(numbers) {
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let answer = 0;
  number.forEach((e) => {
    if (!numbers.includes(e)) {
      answer += e;
    }
  });
  return answer;
}

//다시 푼 방법
function solution(numbers) {
  let answer = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }

  return answer;
}
