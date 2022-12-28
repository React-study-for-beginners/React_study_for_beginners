function solution(array, n) {
  let arr = array.sort((a, b) => a - b).map(v => Math.abs(v - n));
  // 오름차순 정렬, 요소 - n 절대값
  return array[arr.indexOf(Math.min(...arr))];
}