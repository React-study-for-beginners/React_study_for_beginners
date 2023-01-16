function solution(s) {
  s = s.split(" ")
  while (s.includes("Z")) {
      s.splice(s.indexOf("Z") - 1, 2)   // Z 찾아서 그 전 인덱스부터 Z까지 짜름
  }
  return s.reduce((a, c) => a + Number(c), 0) // c가 문자열로 되있어서 바꿔줘야함
}                                             // 0으로 초기값을 설정해주어야 계산 정확 (초기값 설정 안하면 배열 첫번째 요소를 사용)