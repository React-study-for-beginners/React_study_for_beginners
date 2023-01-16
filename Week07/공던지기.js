function solution(numbers, k) {
  var answer = 0;
  
  for (let i = 0; i < k; i++) {
      answer += 2;  // 사람 건너뛰는 부분
      
      if(answer > numbers.length){  // 인덱스 길어지는거 짤라줌
          answer -= numbers.length
      }
  }
  return answer - 1;
}