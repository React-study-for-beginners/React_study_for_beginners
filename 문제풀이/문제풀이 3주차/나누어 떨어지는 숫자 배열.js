//예전에 풀었던 방법
function solution(arr, divisor) {
  arr.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      result.push(arr[i]);
    }
  }

  if (result.length === 0) {
    result.push(-1);
  }

  return result;
}

//이번에 푼 방법
function solution(arr, divisor) {
  const num = arr.filter((e) => e % divisor === 0);

  return num.length > 0 ? num.sort((a, b) => a - b) : [-1];
}
