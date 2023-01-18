function solution(number) {
  let count = 0;
  let Max = number.length;
  for (let i = 0; i < Max - 2; i++) {
    for (let j = i + 1; j < Max - 1; j++) {
      for (let k = j + 1; k < Max; k++) {
        if (number[i] + number[j] + number[k] === 0) count++;
      }
    }
  }

  return count;
}
