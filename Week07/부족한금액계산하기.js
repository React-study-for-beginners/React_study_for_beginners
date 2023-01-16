function solution(price, money, count) {
  let answer = 0;
  for (let i = 0; i <= count; i++) {  // 이용료 N배 증가
      answer += price * i;
  }
  return answer > money ? answer - money : 0
}

// 가우스 공식 사용
function solution(price, money, count) {
  const answer = count * price *  (count + 1) / 2 - money;
   return answer > 0 ? answer : 0
}