// 합성수 찾기

// 문제 설명
// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
// 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

// 입출력 예
// n    result
// 10   5
// 15   8

function solution(n) {
  const list = Array.from({ length: n }, (_, index) => index + 1);

  const factor = [];
  list.map((num) => factor.push(list.filter((x) => num % x === 0)));

  return factor.filter((list) => list.length > 2).length;
}
