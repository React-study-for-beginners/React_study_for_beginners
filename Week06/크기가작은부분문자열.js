function solution(t, p) {
  var answer = 0;
  for(let i = 0; i <= t.length - p.length; i++){
      // substr() 부분 문자열 추출
      // i번 인덱스부터 p.length개 추출
      let num = t.substr(i, p.length);
      
       // 비교
      if(Number(num) <= Number(p)) answer++
  }
  return answer;
}