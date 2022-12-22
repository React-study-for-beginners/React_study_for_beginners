// toString(n) : n진수 변환
// parseInt(string, n) : string을 n진법일 때 값으로 바꿈 

function solution(bin1, bin2) {
  return (parseInt(bin1,2) + parseInt(bin2,2)).toString(2);
}