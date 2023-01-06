// for문 3번 중첩해서 3개 골라냄
// 골라낸거 제외하고 오른쪽 선택하기 위해 + 1
// if 문으로 조건 맞춰줌

function solution(number) {
  var answer = 0;
  
  for(let i = 0; i < number.length; i++){
      for(let j = i + 1; j < number.length; j++){
          for(let k = j + 1; k < number.length; k++){
              if (number[i] + number[j] + number[k] === 0){
                  answer++;
              }
          }
      }
  }
  return answer;
}