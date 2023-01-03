// 팩토리얼

// 문제 설명
// i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
// 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다.
// 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// i! ≤ n
// 0 < n ≤ 3,628,800

// 입출력 예
// n           result
// 3628800     10
// 7           3

function solution(n) {
  let factorial = 1;
  let number = 1;
  while (number * factorial < n) number *= factorial += 1;

  return factorial;
}

// function solution(n) {
//   let factorial = 1;
//   let number;
//   for (number = 1; number * factorial <= n; ++number) factorial *= number;

//   return number - 1;
// }
